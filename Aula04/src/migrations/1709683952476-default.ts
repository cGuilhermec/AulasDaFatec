import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709683952476 implements MigrationInterface {
    name = 'Default1709683952476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "main" varchar(50) NOT NULL, "password" varchar(100) NOT NULL, CONSTRAINT "UQ_13ac7cc5a928db3cc20e1b6864e" UNIQUE ("main"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
