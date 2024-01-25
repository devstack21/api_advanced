
export default class SecurityException extends Error{
    /**
     * @param {String} message 
     * @param {String} code 
     * @param {String} err 
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} request
     * @param {Response<any, Record<string, any>, number>} response
     * @constructor
     * @public
     */
    constructor(message, code, err, request , response ){
        super(message)
        this.code =code
        this.err = err 
        this.request = request
        this.response = response 
        
    }
    get_request(){return this.request}
    get_response(){return this.response}
}