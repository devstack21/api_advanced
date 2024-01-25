
export default class UserBaseDTOException extends Error{
    /**
     * @param {String} message 
     * @param {String} code 
     * @param {String} param_user 
     * @param {any | undefined} err 
     * @param {String} cause
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} req 
     * @param {Response<any, Record<string, any>, number>} res 
     * @constructor
     * @public
     */
    constructor(message, code=undefined, param_user, err=undefined, cause, request, response ){
        super(message)
        this.code =code
        this.param_user = param_user
        this.err = err
        this.cause = cause 
        this.request = request
        this.response = response 
        
    }
    get_request(){return this.request}
    get_response(){return this.response}
}