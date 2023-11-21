import { Eventing } from "./Eventing"
import { Sync } from "./Sync"

const rootUrl = 'http://localhost:3000/users'
export interface UserProps {
    name?: string
    age?: number
    id?: number
}

export class User {
    public event: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}