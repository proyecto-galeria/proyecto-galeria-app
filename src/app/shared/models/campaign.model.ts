import { User } from "./user.model";
import { Concept } from "./concept.model";

export interface Campaign {

    id: Number, // String // UUID
    name: String,
    client: User,
    start_date: String, // DateTime
    end_date: String, // DateTime
    concepts: Concept[],


}