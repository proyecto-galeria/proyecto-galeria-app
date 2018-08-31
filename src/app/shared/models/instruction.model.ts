import { User } from "./user.model";
import { Concept } from "./concept.model";

export interface Instruction {



    // interrelaciones temporalmente via ID, en lo que resolvemos fetches secundarios
    
    id: number, // string // UUID
    description: string,
    date: string, // DateTime
    concept: number,
    concept_object?: Concept,

    user?: number,

    // id: number, // string // UUID
    // description: string,
    // date: string, // DateTime
    // concept: Concept,

    // user?: User,

}  

