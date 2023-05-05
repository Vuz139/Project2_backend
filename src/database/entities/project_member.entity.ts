import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Project } from "./project.entity";
import { instanceToInstance } from "class-transformer";
import { User } from "./user.entity";
import { TaskMember } from "./task_member.entity";

@Entity("project_members")
export class ProjectMember extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => Project, (project: Project) => project.memers, {
        onDelete: "CASCADE"
    })
    project: Project;

    @ManyToOne(() => User, (user: User) => user.isMember, {
        onDelete: "CASCADE"
    })
    user: User;

    @OneToMany(() => TaskMember, (taskMember: TaskMember) => taskMember.projectMember, {
        onDelete: "CASCADE"
    })
    taskMember: TaskMember[];
    @Column('tinyint')
    role: Number;

    @Column('timestamp')
    createdAt: Date;

    toJSON() {
        return instanceToInstance(this);
    }
}