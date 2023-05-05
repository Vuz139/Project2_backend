import { MigrationInterface, QueryRunner } from "typeorm"

export class DocumentRefactoring1683317182578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`documents\` (
                \`id\` int unsigned NOT NULL AUTO_INCREMENT,
                \`task_id\` int unsigned NOT NULL,
                \`path\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`),
                KEY \`FK_documents_task_id\` (\`task_id\`),
                CONSTRAINT \`FK_documents_task_id\` FOREIGN KEY (\`task_id\`) REFERENCES \`tasks\` (\`id\`) ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table if exists documents")
    }

}
