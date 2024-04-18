import { Body, Controller, Get, Post } from "@nestjs/common";
import { TestService } from "./test.service";
import { Test } from "./test.entity";










@Controller('test')
export class TestController {
  
  constructor(private readonly service: TestService) {}

  @Get('')
  async getTests() {
    return this.service.getTests();
  } 

  @Post('')
  async createTest(@Body() test: Partial<Test>) {
    return await this.service.createTest(test);
  }

}