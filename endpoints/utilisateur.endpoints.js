import {app} from "../tools.api/app_tools.js";
import ApiUserService from "../Service/utilisateur.service.js";

import ExceptionListenerApplication from "../listenerExceptionApplication/ExceptionListenerApplication.js";
import MiddlewareNotFoundHTTPRequest from "../middleware/MiddlewareNotFoundHTTPRequest.js";

new ExceptionListenerApplication(
    ['SecurityException',
    'notFoundException'
    ]
)

app
.post('/inscription', new ApiUserService().inscription)
.use(new MiddlewareNotFoundHTTPRequest().HandlerErrorsHttpNotFoundUserService(app))





