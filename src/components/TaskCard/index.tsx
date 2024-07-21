import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { TypeTask } from '../../@types/task';
import {
  AppleIcon,
  BriefcaseBusinessIcon,
  DumbbellIcon,
  ListChecksIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react-native';
import { styles } from './styles';
import { format } from 'date-fns';
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';

import { RootTabParamList } from '../../routes/tab.routes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const getTypeIcon = (type: TypeTask) => {
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

interface ITaskCard {
  title: string;
  when: string;
  id: string;
  type: TypeTask;
}

const TaskCard = ({ id, title, type, when }: ITaskCard) => {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList, 'Edit'>>();

  const navigateToEdit = (id: string) => {
    navigation.navigate('Edit', { id });
  };

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => navigateToEdit(id)}
    >
      <View style={styles.iconTask}>{getTypeIcon(type)}</View>

      <Text style={styles.title}>{title}</Text>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.dateInfo}>
          {format(new Date(when), 'dd/MM/yyyy')}
        </Text>
        <Text style={styles.dateInfo}>{format(new Date(when), 'HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
