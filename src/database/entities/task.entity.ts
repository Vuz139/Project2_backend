import { instanceToInstance } from 'class-transformer';
import {Entity,ManyToOne, JoinColumn, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Project } from './project.entity';
import { TaskMember } from './task_member.entity';
import { Comment } from './comment.entity';
import { Document } from './document.entity';
@Entity('tasks')
export class Task extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Project, (project: Project) => project.tasks, {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    project: Project;

    @Column('tinytext')
    description: string;

    @Column('timestamp')
    deadline: Date;

    @Column('tinyint')
    status: number;

    @Column('tinyint')
    priority: number;

    @Column('timestamp', {
        default: Date.now(),
    })
    createdAt: Date;

    @OneToMany(() => TaskMember, (taskMember: TaskMember) => taskMember.task, {
        onDelete: "CASCADE"
    })
    members: TaskMember[];

    @OneToMany(() => Comment, (comment: Comment) => comment.task, {
        onDelete: "CASCADE"
    })
    comments: Comment[];

    @OneToMany(() => Document, (document: Document) => document.task, {
        onDelete: "CASCADE"
    })
    documents: Document[];

    toJSON() {
        return instanceToInstance(this);
    }
}