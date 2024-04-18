import { MigrationInterface, QueryRunner } from "typeorm";

export class Submission1713385034313 implements MigrationInterface {
    name = 'Submission1713385034313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "submission" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "answers" jsonb NOT NULL, "testId" integer, CONSTRAINT "PK_7faa571d0e4a7076e85890c9bd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_53685d02371670b4495ff181aec" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_53685d02371670b4495ff181aec"`);
        await queryRunner.query(`DROP TABLE "submission"`);
    }

}
