import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { instanceToInstance } from "class-transformer";

import { Task } from "./task.entity";

@Entity("documents")
export class Document extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: Number;


    @ManyToOne(() => Task, (task: Task) => task.documents, {
        onDelete: "CASCADE"
    })
    task: Task;

    @Column('varchar')
    path: String;

    toJSON() {
        return instanceToInstance(this);
    }
}