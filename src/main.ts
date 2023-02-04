import { UserService } from "./service/userService";

class Main {
    private userService = new UserService()

    run() {
        console.log('Application running...');

        const users = this.userService.findUsers()

        console.log('INFO:', users);
    }
}

const main = new Main();

main.run();