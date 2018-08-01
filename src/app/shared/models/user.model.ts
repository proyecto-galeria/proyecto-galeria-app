import { Role } from './role.model';

export interface User {
   
    id: Number, // String // UUID
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    role: Role
 
}