export type FilterOptions = 'all' | 'today' | 'week' | 'month' | 'year';

export type FilterProps = {
  filter: FilterOptions;
  title: string;
  selected: boolean;
  onChange: (filter: FilterOptions) => void;
};
