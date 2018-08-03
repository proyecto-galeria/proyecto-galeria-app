import { Location } from "./location.model";

export interface Concept {

    id: number, // string // UUID
    name: string,
    description: string,
    location: number,
    location_object?: Location

}