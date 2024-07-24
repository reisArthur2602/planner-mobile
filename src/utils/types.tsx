import { TypeTask } from '../@types/task';
import { theme } from '../theme';
import {
  AppleIcon,
  BriefcaseBusinessIcon,
  DumbbellIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react-native';

export type TypesData = {
  type: TypeTask;
  icon: JSX.Element;
  title: string;
};

export const TYPES: TypesData[] = [
  {
    type: 'gym',
    title: 'Academia',
    icon: <DumbbellIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'study',
    title: 'Estudos',
    icon: <NotepadTextIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'work',
    title: 'Trabalho',
    icon: <BriefcaseBusinessIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'food',
    title: 'Alimentação',
    icon: <AppleIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'personal',
    title: 'Pessoal',
    icon: <UserIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'travel',
    title: '',
    icon: <PlaneIcon size={20} color={theme.colors.indigo50} />,
  },
];
