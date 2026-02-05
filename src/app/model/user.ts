import { Note } from "./note";

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    note: Note[] | null
}
