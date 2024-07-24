import { FilterOptions } from '../../screens/Dashboard/sessions/Filter/filter';
import { Task } from '../../@types/task';
import { Api } from '../api/axios-config';

const create = async (
  params: Pick<Task, 'title' | 'description' | 'when' | 'type'>
): Promise<void> => {
  await Api.post('/task', params);
};

const getByFilter = async (filter: FilterOptions): Promise<Task[] | []> => {
  const { data } = await Api.get(`/task/${filter}`);
  return data;
};
const getById = async (id: string): Promise<Task> => {
  const { data } = await Api.get(`/task/${id}`);
  return data;
};

const late = async (): Promise<Task[] | []> => {
  const { data } = await Api.get('/task/late');
  return data;
};

const update = async (data: Omit<Task, 'user_id'>): Promise<void> => {
  await Api.put(`/task/${data.id}`, data);
};

const remove = async (id: string): Promise<void> => {
  await Api.delete(`/task/${id}`);
};
const done = async (params: Pick<Task, 'id' | 'done'>): Promise<void> => {
  await Api.patch(`/task/${params.id}/${params.done}`);
};

export const TaskService = {
  create,
  update,
  remove,
  done,
  late,
  getByFilter,
  getById,
};
