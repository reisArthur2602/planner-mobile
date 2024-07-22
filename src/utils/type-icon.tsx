import { TypeTask } from '../@types/task';
import { theme } from '../theme';
import {
  AppleIcon,
  BriefcaseBusinessIcon,
  DumbbellIcon,
  ListChecksIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react-native';

export const getTypeIcon = (type: TypeTask) => {
  switch (type) {
    case 'study':
      return <NotepadTextIcon size={20} color={theme.colors.indigo50} />;
    case 'gym':
      return <DumbbellIcon size={20} color={theme.colors.indigo50} />;
    case 'work':
      return <BriefcaseBusinessIcon size={20} color={theme.colors.indigo50} />;
    case 'food':
      return <AppleIcon size={20} color={theme.colors.indigo50} />;
    case 'personal':
      return <UserIcon size={20} color={theme.colors.indigo50} />;
    case 'travel':
      return <PlaneIcon size={20} color={theme.colors.indigo50} />;
    default:
      return <ListChecksIcon size={20} color={theme.colors.indigo50} />;
  }
};
