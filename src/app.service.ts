import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './user/Entities/user.entity';
import { Repository } from 'typeorm';
import { UsersCountEntity } from './user/Entities/user.counts.entity';
import { UsersBioEntity } from './user/Entities/user.bio.entity';

@Injectable()
export class AppService {

}
