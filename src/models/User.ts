import { Model } from "./Model"
import { Attributes } from "./Attributes"
import { Eventing } from "./Eventing"
import { ApiSync } from "./ApiSync"
import { Colletion } from "./Colletion"

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
    static buildUserColletion(): Colletion<User, UserProps> {
        return new Colletion<User, UserProps>(
            rootUrl,
            (json: UserProps) => this.buildUser(json)
        )
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100)
        this.set({ age })
    }
}