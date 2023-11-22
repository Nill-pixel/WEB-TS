import { Model } from "./model"
import { Attributes } from "./attributes"
import { Eventing } from "./Eventing"
import { ApiSync } from "./ApiSync"

const rootUrl = 'http://localhost:3000/users'
export interface UserProps {
    name?: string
    age?: number
    id?: number
}

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }
}