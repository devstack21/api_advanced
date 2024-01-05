
export default class SecurityException extends Error{
    /**
     * @param {String} message 
     * @param {String} code 
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} req 
     * @param {Response<any, Record<string, any>, number>} res 
     * @constructor
     * @public
     */
    constructor(message, code=undefined, request , response ){
        super(message)
        this.code =code
        this.request = request
        this.response = response 
        
    }
    get_request(){return this.request}
    get_response(){return this.response}
}