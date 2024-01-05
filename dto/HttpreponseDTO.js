export default class HttpReponseDTO{
    /**
     * @param {String} code 
     * @param {String} message 
     * @param {Array} results 
     * @param {Boolean} success
     * @constructor
     */
    constructor(code=undefined , message , success ,results=[]){
        this.code =  code
        this.message = message
        this.success = success
        this.results = results
        this.data = JSON.stringify(
            {
                code : this.code ,
                message : this.message , 
                success: this.success,
                results : this.results
            }
        )
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
                results : this.results
            }
        
    }

}