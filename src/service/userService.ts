import { User } from "../model/user"
import { UserProxy } from "../proxy/userProxy"

export class UserService {
    private userProxy = new UserProxy();

    findUsers(): User[] {
        let users = this.userProxy.findMany();
        return users;
    }
}