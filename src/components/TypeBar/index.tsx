import { View,TouchableOpacity } from 'react-native';

import React from 'react';

import {
  AppleIcon,
  BriefcaseBusinessIcon,
  DumbbellIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react-native';
import { TypeTask } from '../../@types/task';
import { theme } from '../../theme';
import { activeStyle, styles } from './styles';
import { useDashboard } from '../../hooks/useDashboard';

interface ITypeData {
  type: TypeTask;
  icon: JSX.Element;
}

const typeData: ITypeData[] = [
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
] as const;

const TypeBar = () => {
  const { type, toggleType } = useDashboard();
  return (
    <View style={styles.typeContainer}>
      {typeData.map((t) => (
        <TouchableOpacity
          onPress={() => toggleType(t.type)}
          key={t.type}
          style={[styles.iconContainer, t.type === type && activeStyle]}
        >
          {t.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TypeBar;
