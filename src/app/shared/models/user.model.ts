import { Role } from './role.model';

export interface User {
   
    id: number, // string // UUID
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    role: Role
 
}