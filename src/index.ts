import { User } from "./models/User";

const colletion = User.buildUserColletion();

colletion.on('change', () => {
    console.log(colletion)
})

colletion.fetch()