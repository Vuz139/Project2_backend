import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { instanceToInstance } from "class-transformer";
import { TaskMember } from "./task_member.entity";

@Entity("work_time")
export class WorkTime extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => TaskMember, (taskMember: TaskMember) => taskMember.workTimes, {
        onDelete: "CASCADE"
    })
    taskMember: TaskMember;

    @Column('timestamp')
    startTime: Date;

    @Column('timestamp')
    endTime: Date;

    toJSON() {
        return instanceToInstance(this);
    }
}