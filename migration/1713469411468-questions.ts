import { MigrationInterface, QueryRunner } from "typeorm";

export class Questions1713469411468 implements MigrationInterface {
    name = 'Questions1713469411468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" ADD "questions" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "questions"`);
    }

}
