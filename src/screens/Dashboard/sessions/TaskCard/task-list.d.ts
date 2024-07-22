import { Task } from '../../../../@types/task';

export type TaskCardProps = {
  typeIcon: JSX.Element;
  task: Pick<Task, 'title' | 'when' | 'type' | 'id'>;
  date: string;
  time: string;
  onNavigation: (id: string) => void;
};
