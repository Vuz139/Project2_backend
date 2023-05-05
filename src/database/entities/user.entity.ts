import { Exclude, instanceToInstance } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { ProjectMember } from './project_member.entity';
import { Comment } from './comment.entity';
@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    email: string;

    @Column('varchar')
    @Exclude()
    password: string;

    @Column('varchar')
    name: string;

    @Column('timestamp', {
        nullable: true,
    })
    birthday: Date;

    @Column('varchar', {
        nullable: true,
    })
    occupation: string;
    @Column('varchar', {
        nullable: true,
    })
    company: string;

    @Column('timestamp', {
        nullable: true,
    })

    @OneToMany(() => ProjectMember, (projectMember: ProjectMember) => projectMember.user, {
        onDelete: "CASCADE"

    })
    isMember: ProjectMember[];
    deletedAt: Date;

    @OneToMany(() => Comment, (comment: Comment) => comment.user, {
        onDelete: "CASCADE"
    })
    comments: Comment[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    toJSON() {
        return instanceToInstance(this);
    }
}
