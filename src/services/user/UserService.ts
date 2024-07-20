import { User } from '../../@types/user';
import { Api } from '../api/axios-config';

const auth = async (params: Omit<User, 'id'>): Promise<User> => {
  const { data } = await Api.post('/user/session', params);
  return data;
};

const create = async (params: Omit<User, 'id'>): Promise<User> => {
  const { data } = await Api.post('/user/register', params);
  return data;
};

const details = async (): Promise<User> => {
  const { data } = await Api.get('/user/me');
  return data;
};

export const UserService = {
  auth,
  details,
  create
};
