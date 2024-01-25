import { User } from "../db.model.connect/model/user.model.js"
import bcrypt from 'bcrypt'
import validator from "validator"
import { TIME_MAX_TOKEN_IS_ACTIVE , SALT_ROUNDS} from "../constante.js"
import { validateEmail, validatePassword, validateRequestBody } from "../utils/validateRequestBody.js"
import UserBaseDTOException from "../security.web.api/userBaseDTOException.js"
import { lowerCaseValuesOBject } from "../utils/lowerCaseObjectObjectRequest.js"

import jwt from "jsonwebtoken"



export default class UserBaseDTO {

    constructor(username = undefined , email , mdp){
        this.username = username
        this.email = email 
        this.mdp = mdp
        this.token = null
    }

    static userBaseModelDTO(user){
        return new UserBaseDTO(user._id , user.username , 
            user.email, )
    }

    static is_authenticated(){
        let user = User.findOne({email : this.email})
        return bcrypt.hashSync(this.mdp,user.salt) == user.mdp ? true : false
    }
    generate_jwt_token(){
        let user = User.findOne({email : email})
        return token = user ? jwt.sign({id : user._id},process.env.KEY_TOKEN_DECRYPT,{expiresIn : TIME_MAX_TOKEN_IS_ACTIVE}) : null 
    }
    set_jwt_token(token){
        this.token = token 
    }

    userModelDTB(){
        const salt = bcrypt.genSaltSync(SALT_ROUNDS) , mdpHashed = bcrypt.hashSync(this.mdp,salt)
        const {username} =  lowerCaseValuesOBject({username : this.username})
        return new User({
            username : username,
            email : this.email, 
            mdp : mdpHashed,
            salt : salt
        })
       
    }
    

}