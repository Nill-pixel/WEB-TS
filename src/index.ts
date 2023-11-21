import { User } from "./models/User";

const user = new User({ name: 'New record', age: 0 })

user.event.on('change', () => {
    console.log('change')
})

user.event.trigger('change')