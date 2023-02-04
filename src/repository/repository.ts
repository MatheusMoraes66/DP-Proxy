import { User } from "../model/user";

export abstract class UsersRepository{
  abstract findMany(): User[]
}
