

import HttpReponseDTO from "../dto/HttpreponseDTO.js";

class HandlerExceptionApplication {
    /**
     * @param {any} exception 
     * @public
     */
    handlerException(exception) {
      console.log(`${exception.constructor.name} a été levée :`, exception.message);
      
      // Envoyer la réponse HTTP
      return exception.get_response().json(
        new HttpReponseDTO(
          exception.code,
          exception.message,
          false,
        ).getReponseDataObject()
      );
    }
  }
   
export const handlerExceptionApp = new HandlerExceptionApplication()