import { createContext, ReactNode, useState } from 'react';
import { FilterOptions } from '../@types/filter';
import { TypeTask } from '../@types/task';

interface IDashboardContext {
  filter: FilterOptions;
  type: TypeTask;
  toggleFilter(filter: FilterOptions): void;
  toggleType(type: TypeTask): void;
}

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterOptions>('all');
  const [type, setType] = useState<TypeTask>('gym');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };
  const toggleType = (type: TypeTask) => {
    setType(type);
  };
  return (
    <DashboardContext.Provider
      value={{ filter, type, toggleFilter, toggleType }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
