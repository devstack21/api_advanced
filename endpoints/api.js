import app from "../tools.api/app_tools.js";
import ApiService from "../Service/utilisateur.service.js";

import ExceptionListenerApplication from "../service/listenerExceptionService/ExceptionListenerApplication.js";

new ExceptionListenerApplication(
    ['SecurityException']
);

app.get('/api', new ApiService().api)






