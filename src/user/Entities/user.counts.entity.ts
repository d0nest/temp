import { ChildEntity, Column } from "typeorm";
import { UsersEntity } from "./user.entity";

@ChildEntity()
export class UsersCountEntity extends UsersEntity{
    @Column()
    count: number
}