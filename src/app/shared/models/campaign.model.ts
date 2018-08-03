import { User } from "./user.model";
import { Concept } from "./concept.model";

export interface Campaign {

    id: number, // string // UUID
    name: string,
    client: User,
    start_date: string, // DateTime
    end_date: string, // DateTime
    concepts: Concept[],


}