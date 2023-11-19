import { User } from "./models/User";
const user = new User({ name: 'Nill', age: 21 })

user.on('change', () => {
    console.log('Change #1')
})
user.on('change', () => {
    console.log('Change #2')
})
user.on('save', () => {
    console.log('Change #3')
})

user.trigger('sav')