import { User } from "./user.model";
import { Concept } from "./concept.model";

export interface Instruction {



    // interrelaciones temporalmente via ID, en lo que resolvemos fetches secundarios
    
    id: Number, // String // UUID
    description: String,
    date: String, // DateTime
    concept: Number,

    user?: Number,

    // id: Number, // String // UUID
    // description: String,
    // date: String, // DateTime
    // concept: Concept,

    // user?: User,

}