
import NotFoundHTTPException from "../security.web.api/notFoundHTTPException.js";
import listEndpoints from "express-list-endpoints";

export default class MiddlewareNotFoundHTTPRequest{

    HandlerErrorsHttpNotFoundUserService(app){
      
        let urls = listEndpoints(app).map(layer => layer.path)
        return function(request, response, next) {
          if (!urls.includes(request.path)) {
            const notFoundException = new NotFoundHTTPException(
              "Not Found",request.url , 
              request.method ,request.ip,"NFO001",request,response 
            )
            process.emit('notFoundException', notFoundException)
            
          } else {
              next();
          }
        };
    }

}



