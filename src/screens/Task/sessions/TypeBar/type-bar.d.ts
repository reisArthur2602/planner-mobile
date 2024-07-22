import { TypeTask } from '../../../../@types/task';
import { TypeIconData } from '../../../../utils/types';

export type TypeBarProps = {
  types: TypeIconData[];
  type: TypeTask;
  onChange: (type: TypeTask) => void;
};
