import { FiltersData } from "../../../../utils/filters";
import { FilterOptions } from "../Filter/filter";

export type FilterBarProps = {
  filter: FilterOptions;
  filters: FiltersData[];
  onChange: (filter:FilterOptions) => void
};
