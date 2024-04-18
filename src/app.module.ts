import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSourceOptions from './database/database.providers';
import { TestModule } from './test/test.module';
import { SubmissionModule } from './submission/submission.module';

@Module({
  // imports: [TypeOrmModule.forRoot(dataSourceOptions), TestModule, SubmissionModule],
  // imports: [TypeOrmModule.forRoot(dataSourceOptions), TestModule, SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
