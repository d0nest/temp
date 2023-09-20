import { ChildEntity, Column } from "typeorm";
import { UsersEntity } from "./user.entity";

@ChildEntity()
export class UsersBioEntity extends UsersEntity{
    @Column()
    bio: string
}