import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const port = 4005 
const CORS_OPTIONS = {"origin":"http://localhost:4000",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 203}

const app = express()

function middleware(req , res , next){
    console.log(req.url)
    if (req.url =="/apis") {}
    else next()
}
app
.use(
    cors()
)
.use(morgan('dev'))
.use(middleware)


app.listen(
    4004 , async function(){
        console.log("Server started on the port 4004")
    }
)


export default app 