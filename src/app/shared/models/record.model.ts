import { Instruction } from "./instruction.model";
import { User } from "./user.model";

export interface Record {


    id: number, // string // UUID
    user: number,
    date: string, // DateTime
    name: string,
    comments: string,
    instruction: Instruction,
    photo: string,
    sent: boolean,
    recipients: string[],


}