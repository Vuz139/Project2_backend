import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TaskRefactoring1683312549699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
         ` CREATE TABLE tasks (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            project_id INT UNSIGNED,
            description tinytext,
            deadline timestamp,
            status tinyint,
            priority tinyint,
            createdAt timestamp DEFAULT CURRENT_TIMESTAMP, 
            PRIMARY KEY (id),
            CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES projects(id)
            ON DELETE CASCADE
            )`
        );
          
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE tasks`);
    
    }

}
