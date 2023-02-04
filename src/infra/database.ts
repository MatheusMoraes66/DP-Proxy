import { UsersRepository } from "../repository/repository";

export class Database implements UsersRepository{
    findMany(): any[]{
        return [
            {
                name: 'Matheus',
                age: 24
            }
        ]
    }
}