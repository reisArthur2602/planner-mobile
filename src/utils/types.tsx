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

export type TypeIconData = {
  type: TypeTask;
  icon: JSX.Element;
};

export const TYPES: TypeIconData[] = [
  {
    type: 'gym',
    icon: <DumbbellIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'study',
    icon: <NotepadTextIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'work',
    icon: <BriefcaseBusinessIcon size={20} color={theme.colors.indigo50} />,
  },
  { type: 'food', icon: <AppleIcon size={20} color={theme.colors.indigo50} /> },
  {
    type: 'personal',
    icon: <UserIcon size={20} color={theme.colors.indigo50} />,
  },
  {
    type: 'travel',
    icon: <PlaneIcon size={20} color={theme.colors.indigo50} />,
  },
];


