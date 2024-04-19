import { Injectable } from "@nestjs/common";
import { Test } from "./test.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TestService {

  constructor(@InjectRepository(Test) readonly repo: Repository<Test>) {}

  getTests() {
    return this.repo.find();
  }

  createTest(test: Partial<Test>) {
    test = this.repo.create(test);
    return this.repo.save(test);
  }
}