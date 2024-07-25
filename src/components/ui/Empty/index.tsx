import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { ClipboardCheck } from 'lucide-react-native';
import { theme } from '../../../theme';

const Empty = ({ title }: { title: string }) => {
  return (
    <View style={styles.emptyContainer}>
        <ClipboardCheck size={60} color={theme.colors.indigo600} />
      <Text style={styles.emptyText}>{title}</Text>
    </View>
  );
};

export default Empty;
