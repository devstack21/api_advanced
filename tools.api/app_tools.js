import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { connectDBMongoDBLocal } from '../db.model.connect/connectdb/connectdb.js'

//Constantes 
import { CORS_OPTIONS } from '../constante.js'
import { PATH_CONFIG_ENV } from '../constante.js'

//Configuration variables
dotenv.config({path : PATH_CONFIG_ENV})

//Instance app express 
export const app = express()

connectDBMongoDBLocal()

//on exception middleware app
app
.use(
    cors(CORS_OPTIONS)
)
.use(morgan('dev'))
.use(bodyParser.json())




app.listen(
    process.env.PORT , async function(){
        console.log(`Server started on the port ${process.env.PORT}`)
    }
)
