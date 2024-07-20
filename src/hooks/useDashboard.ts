import { useContext } from 'react';
import { DashboardContext } from '../context/Dashboard';

export const useDashboard = () => {
  return useContext(DashboardContext);
};
