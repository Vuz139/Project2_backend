import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { instanceToInstance } from "class-transformer";
import { User } from "./user.entity";
import { Task } from "./task.entity";
@Entity("comments")
export class Comment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => User, (user: User) => user.comments, {
        onDelete: "CASCADE"
    })
    user: User;

    @ManyToOne(() => Task, (task: Task) => task.comments, {
        onDelete: "CASCADE"
    })
    task: Task;

    @Column('tinytext')
    content: String;

    @Column('timestamp', {
        default: Date.now(),
    })
    createdAt: Date;

    toJSON() {
        return instanceToInstance(this);
    }
}