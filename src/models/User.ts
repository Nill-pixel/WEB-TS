import { AxiosResponse } from "axios"
import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./attributes"

const rootUrl = 'http://localhost:3000/users'
export interface UserProps {
    name?: string
    age?: number
    id?: number
}

export class User {
    public event: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
    public attributes: Attributes<UserProps>

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }

    get on() {
        return this.event.on
    }
    get trigger() {
        return this.event.trigger
    }
    get get() {
        return this.attributes.get
    }

    set(update: UserProps): void {
        this.attributes.set(update)
        this.event.trigger('change')
    }

    fetch(): void {
        const id = this.get('id')

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save')
            })
            .catch(()=>{
                this.trigger('error')
            })
    }
}