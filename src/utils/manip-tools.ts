import { CharManager } from "../charManipulation/alphabet/alphabet.js";


export default function convertStringToAltCharacters(charInput: string): string {    
    return CharManager.convertToAltChars(charInput)    
}
