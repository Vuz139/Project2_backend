import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { instanceToInstance } from "class-transformer";
import { Task } from "./task.entity";
import { ProjectMember } from "./project_member.entity";
import { WorkTime } from "./work_time.entity";

@Entity("task_members")
export class TaskMember extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => Task, (task: Task) => task.members, {
        onDelete: "CASCADE"
    })
    task: Task;

    @ManyToOne(() => ProjectMember, (projectMember: ProjectMember) => projectMember.taskMember, {
        onDelete: "CASCADE"
    })
    projectMember: ProjectMember;


    @Column('tinyint')
    role: Number;

    @Column('timestamp', {
        default: Date.now(),
    })
    createdAt: Date;

    @OneToMany(() => WorkTime, (workTime: WorkTime) => workTime.taskMember, {
        onDelete: "CASCADE"
    })
    workTimes: WorkTime[];

    

    toJSON() {
        return instanceToInstance(this);
    }
}