import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

// Adding a prefix/param here of 'hello' will set the route for the controller 3000/hello
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}