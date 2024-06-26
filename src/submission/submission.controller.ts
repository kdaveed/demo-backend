import { Body, Controller, Get, Post } from "@nestjs/common";
import { Submission } from "./submission.entity";
import { SubmissionService } from "./submission.service";



@Controller('submission')
export class SubmissionController {
  constructor(private readonly service: SubmissionService) {}

  @Get()
  async getSubmissions() {
    await new Promise((res) => setTimeout(res, 1_500));
    return this.service.getSubmissions();
  }

  @Post()
  async postSubmissions(@Body() submission: Partial<Submission>) {
    return this.service.createSubmission(submission);
  }
}