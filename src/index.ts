import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Nill", age: 21 })
const div = document.getElementById("root")
const userForm = new UserForm(div, user)
userForm.render()