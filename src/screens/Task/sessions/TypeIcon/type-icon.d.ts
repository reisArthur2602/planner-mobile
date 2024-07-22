import { TypeTask } from '../../../../@types/task';

export type TypeIconProps = {
  icon: JSX.Element;
  type: TypeTask;
  selected: boolean;
  onChange: (type: TypeTask) => void;
};
