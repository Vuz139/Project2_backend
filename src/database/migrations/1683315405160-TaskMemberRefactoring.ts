import { MigrationInterface, QueryRunner } from "typeorm"

export class TaskMemberRefactoring1683315405160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
             CREATE TABLE task_members (
                id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    taskId INT UNSIGNED,
                    projectMemberId INT UNSIGNED,
                    role TINYINT UNSIGNED,
                    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (taskId) REFERENCES tasks(id) ON DELETE CASCADE,
                    FOREIGN KEY (projectMemberId) REFERENCES project_members(id) ON DELETE CASCADE
             )       
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE IF EXIS task_members")
    }

}
