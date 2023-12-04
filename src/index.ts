import { User } from "./models/User";
<<<<<<< HEAD
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Nill", age: 21 })

const root = document.getElementById("root")

if (root) {
    const userEdit = new UserEdit(root, user)
    userEdit.render()
} else {
    throw new Error('Element Root not found')
}
=======

const colletion = User.buildUserColletion();

colletion.on('change', () => {
    console.log(colletion)
})

colletion.fetch()
>>>>>>> parent of 8dfdcc7 (main)
