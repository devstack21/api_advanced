import mongoose from "mongoose";
import validator from "validator";


const UserSchema =  new mongoose.Schema(
    {
        username : {
            type : String , 
            unique : true , 
            required : [true , "Veuillez saisir le nom d'utilisateur" ]
        },
        email : {
            type : String , 
            required : [true ,"Veuillez saisir l'email"],
            validate : [validator.isEmail, "L'email est invalide"],
            unique : true,
            trim : true ,
            minlength : 12
        },
        mdp : {
            type : String ,
            required : [true, "veuillez saisir le mot de passe"],
            minlength : 6,
            max : 256,
            unique : true
        },
        salt : {
            type : String , 
            unique : true ,
            required : [true , "le salt-crypto doit etre défini"]
        },
        active : {
            type : Boolean, 
            default : false 
        }

    },{
        timestamps : true 
    }
)

export const User = mongoose.model('users', UserSchema)
