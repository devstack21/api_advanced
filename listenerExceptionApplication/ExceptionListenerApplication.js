import {handlerExceptionApp} from "../adviceHandlerApp/HandlerExceptionApplication.js";

export default class ExceptionListenerApplication {
    constructor(events) {
      this.events = events;
      this.registerEventListeners();
      console.log(this.events)
    }
    registerEventListeners() {
      this.events.forEach(event => {
        process.on(event, exception => {
            handlerExceptionApp.handlerException(exception);
        });
      });
    }
  
  }

  

