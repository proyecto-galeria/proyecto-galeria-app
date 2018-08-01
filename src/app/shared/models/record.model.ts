import { Instruction } from "./instruction.model";
import { User } from "./user.model";

export interface Record {


    id: Number, // String // UUID
    user: User,
    date: String, // DateTime
    name: string,
    comments: string,
    instruction: Instruction,
    photo: String,
    sent: boolean,
    recipients: String[],


}