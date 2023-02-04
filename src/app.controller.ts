import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('app')
  getData(): any {
    return 'hello';
  }

  user: any = {
    name: 'Shivam',
    age: 20,
  };
  @Get('user')
  getUserDetails(): any {
    return this.user;
  }
}
