export interface User {
    
    firstName: String,
    lastName: string,
    //L'age et l'adresse cont optionnels
    age?: number,
    address?: {
        street?: string,
        city?: string,
        state?: string
    },
    image?:string,
    isActive?:boolean,
    balance?: number,
    registered?: any,
    hide?:boolean 
}