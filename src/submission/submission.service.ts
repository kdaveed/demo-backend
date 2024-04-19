import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from './submission.entity';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission) readonly repo: Repository<Submission>,
  ) {}


  async createSubmission(submission: Partial<Submission>) {
    submission = this.repo.create(submission);
    return this.repo.save(submission);
  }

  async getSubmissions() {
    return this.repo.find({
      relations: ['test'],
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
