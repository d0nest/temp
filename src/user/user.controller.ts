import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    createUser(@Body() user) {
        return this.userService.createUser(user)
    }
}
