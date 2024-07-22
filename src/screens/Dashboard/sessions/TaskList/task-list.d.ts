import { Task } from '../../../../@types/task';

export type TaskListProps = {
  tasks: Pick<Task, 'title' | 'when' | 'type' | 'id'>[];
};
