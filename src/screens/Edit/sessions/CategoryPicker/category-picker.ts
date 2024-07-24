import { TypeTask } from '../../../../@types/task';
import { TypesData } from '../../../../utils/types';

export type CategoryPickProps = {
  types: TypesData[];
  value: TypeTask;
  label:string
  onChange: (type: TypeTask) => void;
};
