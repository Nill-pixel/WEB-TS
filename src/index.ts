import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Nill", age: 21 })

const root = document.getElementById("root")

if (root) {
    const userEdit = new UserEdit(root, user)
    userEdit.render()
} else {
    throw new Error('Element Root not found')
}
