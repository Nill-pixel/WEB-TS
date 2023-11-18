import { User } from "./models/User";
const user = new User({ name: 'Nill', age: 21 })

console.log(user.get('name'))
console.log(user.get('age'))