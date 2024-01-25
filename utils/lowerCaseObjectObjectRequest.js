import { KEY_OBJECT_IGNORE_LOWER } from "../constante.js";

export function lowerCaseValuesOBject(objectRequest){
    let objectValueLower = {}
    for (const [key, value] of Object.entries(objectRequest)) 
        objectValueLower[key] = KEY_OBJECT_IGNORE_LOWER.includes(key) ? value : value.toLowerCase()
      
    return objectValueLower
}
