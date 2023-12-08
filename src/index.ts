import { Colletion } from "./models/Colletion";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Colletion('http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json)
    }
)

users.on('change', () => {
    const root = document.getElementById('root')

    if (root) {
        new UserList(root, users).render()
    }
})


users.fetch()