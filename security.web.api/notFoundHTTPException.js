
export default class NotFoundHTTPException extends Error{
    /**
     * @param {String} message 
     * @param {String} http_url_client
     * @param {String} method_http
     * @param {String} ip_addr_client
     * @param {String} code 
     * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} req 
     * @param {Response<any, Record<string, any>, number>} res 
     * @constructor
     * @public
     */
    constructor(message, http_url_client , method_http , ip_addr_client=undefined, code=undefined, request , response ){
        super(message)
        this.code =code
        this.http_url_client = http_url_client
        this.method_http = method_http
        this.ip_addr_client = ip_addr_client
        this.request = request
        this.response = response 
        
    }
    get_request(){return this.request}
    get_response(){return this.response}
}