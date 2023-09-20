import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './user/Entities/user.entity';
import { UsersBioEntity } from './user/Entities/user.bio.entity';
import { UsersCountEntity } from './user/Entities/user.counts.entity';
import { UserModule } from './user/user.module';

const dataSource = TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "postwithnest",
  username: "d0nest",
  password: "1234",
  entities: [UsersEntity,UsersBioEntity,UsersCountEntity],
  synchronize: true
})

@Module({
  imports: [dataSource, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
