
import SecurityException from "../security.web.api/securityException.js";
import HttpReponseDTO from "../dto/HttpreponseDTO.js";

class HandlerExceptionApplication {
    /**
     * @param {any} exception 
     * @public
     */
    handlerException(exception){
        if (exception instanceof SecurityException) {
            console.log('SecurityException a été levée :', exception.message);
            //send response HTTP
            exception.get_response().json(
                new HttpReponseDTO(
                    exception.code,
                    exception.message,
                    false,
                ).getReponseDataObject()
            )}}  
}
export const handlerExceptionApp = new HandlerExceptionApplication()