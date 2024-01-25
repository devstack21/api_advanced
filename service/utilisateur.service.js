
import SecurityException from '../security.web.api/securityException.js';
import { lowerCaseValuesOBject } from '../utils/lowerCaseObjectObjectRequest.js';
import { validateRequestBody, validateEmail, validatePassword } from '../utils/validateRequestBody.js';
import HttpReponseDTO from '../dto/HttpreponseDTO.js';
import { User } from '../db.model.connect/model/user.model.js';
import UserBaseDTO from '../dto/userAuth.dto.js';
import mongoose from 'mongoose';


export default class ApiUserService  {

    /**
     * 
     * @param {String} username 
     * @param {String} email 
     * @param {Strin} mdp 
     * @returns {String}
     */
    static validateUserBodyRequest(username , email , mdp){
        let message = String()
        if(!validateEmail(email)) message = "L'email est invalide "
        if(!validatePassword(mdp)) message = "Le mot de passe doit contenir 9 caractères"
        if(!validateRequestBody(username)) message = "Le nom d'utilisateur ne doit pas contenir des caractères speciaux"

        return message 
           
        }
    /**
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} request
     * @param {Response<any, Record<string, any>, number>} response 
     * @public
     */
    async inscription(request , response){
        const {username , email , mdp} = request.body
        let message = ApiUserService.validateUserBodyRequest(username , email , mdp)
        console.log(message)
        if (message) return response.json(new HttpReponseDTO(
            message = message,
            success = false,
            code = "IN001").getReponseDataObject())
        
        const session = await mongoose.startSession();
        const newUserDTO = new UserBaseDTO(username , email , mdp)
        session.startTransaction();   
        const user = newUserDTO.userModelDTB()
        user.save()
            .then(async(doc)=>{
                return response.json(
                    new HttpReponseDTO(
                
                        "Inscription reussie avec succès",
                        true,
                        UserBaseDTO.userBaseModelDTO(doc)
                    ).getReponseDataObject())})
        .catch(async(err)=>{
            console.log(err)
            await session.abortTransaction()
            const exception = new SecurityException(
            "Echec d'inscription ","IN002", err,request ,response)
            process.emit('SecurityException', exception);
        })
        session.endSession()
    }
    /**
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} request
     * @param {Response<any, Record<string, any>, number>} response 
     * @public
     */
    async connexion(request , response){
        const {email , mdp} = await request.body 
        const userdb = User.findOne({email : email})
        const userDTO = UserBaseDTO.userBaseModelDTO(userdb)
        if(UserBaseDTO.is_authenticated()) {
            userDTO.set_jwt_token(userDTO.generate_jwt_token())
            response.json(
                new HttpReponseDTO(
                    "Connexion reussie",
                    true,
                    userDTO
                ).getReponseDataObject()
            ) 
        }else {
            const exception = new SecurityException(
                "Echec de connexion","SE001",request ,response)
                process.emit('SecurityException', exception);
        }
    }

}