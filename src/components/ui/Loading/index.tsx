import { SafeAreaView, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import { theme } from '../../../theme';
import { styles } from './styles';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={60} color={theme.colors.indigo600} />
    </View>
  );
};

export default Loading;
