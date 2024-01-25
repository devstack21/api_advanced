// import modules mongo 

import mongo from 'mongoose'

// Url connection MONGODB 
const TIMEOUT_RETRY_CONNECT_MONGODB = 3000
const NBR_RETRY_CONNECT_MONGODB = 5
const OPTIONS_CONNECT_MONGODB = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

let cmptRetryMongoDBConnection = 0;

/**
 * 
 * @public
 */
export function connectDBMongoDBLocal(){

    const URL_MONGODB_LOCAL =`mongodb://${process.env.MONGO_LOCAL_ADDR}:${process.env.MONGO_LOCAL_PORT}/${process.env.MONGO_LOCAL_DBNAME}`
    
    cmptRetryMongoDBConnection+=1; 

    if(cmptRetryMongoDBConnection < NBR_RETRY_CONNECT_MONGODB){
            mongo.connect(URL_MONGODB_LOCAL)
                .then(()=>{console.log(`Connection local DB success`)})
                .catch((err)=>{
                    // define timer connect : 10s
                    setTimeout(() => {connectDBMongoDBLocal()}, TIMEOUT_RETRY_CONNECT_MONGODB); 
                     
                }) } 
        else {
            let error ={
                "error":{
                    "message" : {
                        "Content" : "Error connection MongoDB Local",
                        "Reason" : " Failed 4 connection"
                    }
                }
                
            }
            console.debug(error)
        }  
    
}

