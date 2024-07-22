import { FilterOptions } from '../screens/Dashboard/sessions/Filter/filter';

export type FiltersData = {
  type: FilterOptions;
  title: string;
};

export const FILTERS: FiltersData[] = [
  { type: 'all', title: 'Todos' },
  { type: 'today', title: 'Hoje' },
  { type: 'week', title: 'Semana' },
  { type: 'month', title: 'Mês' },
  { type: 'year', title: 'Ano' },
];
