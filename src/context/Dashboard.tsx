import { createContext, ReactNode, useState } from 'react';
import { FilterOptions } from '../@types/filter';

interface IDashboardContext {
  filter: FilterOptions;
  toggleFilter(filter: FilterOptions): void;
}

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterOptions>('all');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };
  return (
    <DashboardContext.Provider value={{ filter, toggleFilter }}>
      {children}
    </DashboardContext.Provider>
  );
};
