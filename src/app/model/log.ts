import { LogCategory } from "./logCateg";

export interface Log {
    content: string;
    createdDate : Date;
    logCategory : LogCategory

}
