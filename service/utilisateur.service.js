
import SecurityException from '../security.web.api/securityException.js';

export default class ApiService  {

    /**
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} request
     * @param {Response<any, Record<string, any>, number>} response 
     * @public
     *
     */
    api(request , response){
        let t = 0
        if (t==0) {
            
            const exception = new SecurityException("une erreur est survenue","SE001", request , response)
            
            process.emit('SecurityException', exception);
        
        }
        else {
            response.send("HELLO ZONE ")
            console.log("HELLO FAMILY XXL ")
        }
        
    }

}