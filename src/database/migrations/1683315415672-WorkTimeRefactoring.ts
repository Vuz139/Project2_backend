import { MigrationInterface, QueryRunner } from "typeorm"

export class WorkTimeRefactoring1683315415672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE work_times (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                task_member_id INT UNSIGNED NOT NULL,
                startTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                endTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (task_member_id) REFERENCES task_members(id) ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE work_times")
    }

}
