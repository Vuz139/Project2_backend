import { instanceToInstance } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './task.entity';
import { ProjectMember } from './project_member.entity';

@Entity("projects")
export class Project{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    field: string;

    @Column('timestamp')
    time: Date;

    @Column('varchar')
    size: string;
    
    @OneToMany(() => Task, (task: Task) => task.project, {
        onDelete: "CASCADE"
    })
    tasks: Task[];

    @OneToMany(() => ProjectMember, (project_members: ProjectMember) => project_members.project, {
        onDelete: "CASCADE"
    })
    memers: ProjectMember[];


    toJSON() {
        return instanceToInstance(this);
    }
}