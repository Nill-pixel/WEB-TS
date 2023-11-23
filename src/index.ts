import { Colletion } from "./models/Colletion";

const colletion = new Colletion("http://localhost:3000/users")

colletion.on('change', () => {
    console.log(colletion)
})

colletion.fetch()