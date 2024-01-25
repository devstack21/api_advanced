export default class HttpReponseDTO{
    /**
     * @param {String} code 
     * @param {String} message 
     * @param {Array} results 
     * @param {Boolean} success
     * @constructor
     */
    constructor(code=undefined , message , success ,err_app=undefined  ,results=[]){
        this.code =  code
        this.message = message
        this.success = success
        this.results = results
        this.err_app =  err_app

    }
    /**
     * 
     * @returns {JSON}
     */
    getReponseDataJSON(){
        return JSON.stringify(
            {
                code : this.code ,
                message : this.message , 
                success: this.success,
                err_app : this.err_app,
                results : this.results
            }
        )
    }
    /**
     * 
     * @returns {Object}
     */
    getReponseDataObject(){
        return {
                code : this.code,
                message : this.message , 
                success: this.success,
                err_app : this.err_app,
                results : this.results
            }
        
    }

}//691 79 14 10