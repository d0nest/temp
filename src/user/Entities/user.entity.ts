import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column: {type: 'varchar', name: 'type'} })
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    username: string;
    
    @Column() 
    password: string;
}