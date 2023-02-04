import { User } from "../model/user";
import { Database } from "../db/database";
import { UsersRepository } from "../repository/repository";

export class UserProxy implements UsersRepository {

    private cache: User[] = [];
    private isCached: boolean = false;
    private db = new Database();

    findMany(): User[] {
        this.validCache()
        this.logger()
        if (this.isCached) {
            return this.cache
        }       

        const users = this.db.findMany()

        this.create(users)

        return users
    }

    create(data: any) {
        this.cache.concat(data)
    }

    validCache() {
        this.isCached = this.cache.length !== 0 ? true : false
    }

    logger() {
        let message = this.isCached ? 'FROM CACHE' : 'FROM MYSQL'

        console.log(message);
    }
}