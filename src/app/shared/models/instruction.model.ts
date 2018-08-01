import { User } from "./user.model";
import { Concept } from "./concept.model";

export interface Instruction {


    id: Number, // String // UUID
    user: User,
    description: String,
    date: String, // DateTime
    concept: Concept,


}