import { User } from "./models/User";

const user = new User({id: 7, name: 'New Record', age: 17 })

user.on('save', () => {
    console.log("User as changed")
})

user.save()
