
const sqlRegex = /(\b(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)\b)|(\b(OR|AND)\b)/gi
const regex = /^[a-zA-Z0-9_\s]*$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z]{0,2})(?=.*[@_]{0,2})(?=.{6,})/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const maxLengthPhone = 9
/**
 * 
 * @returns {Boolean}
 */
export function validateRequestBody(){
    const  values = Array.prototype.slice.call(arguments)
    for(let element of values)if(!regex.test(element) || sqlRegex.test(element) ||  !isNaN(element) ) {console.debug(element);return false}; return true
}
/**
 * 
 * @param {String} phone 
 * @returns {Boolean}
 */
export function validatePhoneLength(phone) {
    return phone.length == maxLengthPhone && regex.test(phone) && !sqlRegex.test(phone) && phone[0]=="6";
}
/**
 * 
 * @param {String} email 
 * @returns {Boolean}
 */
export function validateEmail(email) {
    console.log(emailRegex.test(email))
    return emailRegex.test(email) && !sqlRegex.test(email) ; // check invalid character 
  }
/**
 * 
 * @param {String} pwd 
 * @returns {Boolean}
 */
export function validatePassword(pwd){
    //valid 1 upper case - 1 numeric value - 2||3 special character @ _
    // minimum 12 caractères 
    return pwdRegex.test(pwd) && !sqlRegex.test(pwd)
}
/**
 * 
 * @param {object} body 
 * @returns {Boolean}
 */
//???
export function checkIfElementRequestBodyNotNull(body){
    
    for(let element in body){
        if(element.length == 0) return false
    }
}
export function compterCaractere(chaine, caractere) {
    let compteur = 0;
    
    for (let i = 0; i < chaine.length; i++) {
      if (chaine[i] === caractere) {
        compteur++;
      }
    }
    
    return compteur;
  }
  
