import { Task } from '../../@types/task';
import { Api } from '../api/axios-config';

const create = async (
  params: Pick<Task, 'title' | 'description' | 'when' | 'type'>
): Promise<void> => {
  await Api.post('/task', params);
};

export const TaskService = { create };
