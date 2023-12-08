import { User, UserProps } from "../models/User";
import { ColletionView } from "./ColletionView";
import { UserShow } from "./UserShow";

export class UserList extends ColletionView<User, UserProps>{
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render()
    }

}