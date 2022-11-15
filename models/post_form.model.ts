import { User } from "./user.model";

export interface PostFormService {
    tenant: string;
    form: string;
    date: string;
    status: string;
    channels: Array<string>;
    data: User;
}