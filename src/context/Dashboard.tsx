import { createContext, ReactNode, useState } from 'react';

import { TypeTask } from '../@types/task';

interface IDashboardContext {
  type: TypeTask;
  toggleType(type: TypeTask): void;
}

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<TypeTask>('gym');

  const toggleType = (type: TypeTask) => {
    setType(type);
  };
  return (
    <DashboardContext.Provider value={{ type, toggleType }}>
      {children}
    </DashboardContext.Provider>
  );
};
