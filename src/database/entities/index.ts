import { Project } from './project.entity';
import { ProjectMember } from './project_member.entity';
import { Task } from './task.entity';
import { TaskMember } from './task_member.entity';
import { User } from './user.entity';
import { WorkTime } from './work_time.entity';

export const entities = [User, Project, Task, TaskMember, ProjectMember];
