import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './Entities/user.entity';
import { UsersBioEntity } from './Entities/user.bio.entity';
import { UsersCountEntity } from './Entities/user.counts.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>, @InjectRepository(UsersBioEntity) private bioRepo: Repository<UsersBioEntity>, @InjectRepository(UsersCountEntity) private countRepo: Repository<UsersCountEntity>) { }

    createUser(user) {
        return this.userRepo.save(user)
    }
}
