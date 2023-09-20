import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersBioEntity } from './Entities/user.bio.entity';
import { UsersEntity } from './Entities/user.entity';
import { UsersCountEntity } from './Entities/user.counts.entity';
import { UserService } from './user.service';
import { UsersController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UsersBioEntity,UsersEntity,UsersCountEntity])],
    providers: [UserService],
    controllers: [UsersController],
    exports: [UserService]
})
export class UserModule {}
