import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    return this.appService.getHello();
  }
  
  @Get('homedata')
  async xgetHello() {
    await new Promise(res => setTimeout(res, 1_500)); 
    return 'yoooo';
  }
}
