import { User } from "../model/user";
import { Database } from "../infra/database";
import { UsersRepository } from "../repository/repository";

export class UserProxy implements UsersRepository {

    private cache: User[] = []
    private db = new Database()

    findMany(): User[] {
        if (this.cache.length === 0) {
            const users = this.db.findMany()

            this.create(users)

            console.log('FROM MYSQL');

            return users
        }

        console.log('FROM CACHE');
        

        return this.cache
    }

    create(data: any) {
        this.cache.concat(data)
    }
}