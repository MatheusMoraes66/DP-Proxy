import { UsersRepository } from "../repository/repository";

export class Database implements UsersRepository{
    findMany(): any[]{
        return [
            {
                name: 'Matheus',
                age: 24
            },
            {
                name: 'Luiza',
                age: 20
            },
            {
                name: 'Marcos',
                age: 39
            },
            {
                name: 'Daniela',
                age: 23
            }
        ]
    }
}