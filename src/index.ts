import { User } from "./models/User";

const user = User.buildUser({ id: 9 })

user.on('change', () => {
    console.log("User as changed")
})

user.fetch()
