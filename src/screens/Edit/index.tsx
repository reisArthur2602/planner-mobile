import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootTabParamList } from '../../routes/Tab/tab';
const Edit = () => {
  const { params } = useRoute<RouteProp<RootTabParamList, 'Edit'>>();

  const { id } = params;

  return (
    <SafeAreaView style={styles.editContainer}>
      <Text>Edit</Text>
    </SafeAreaView>
  );
};

export default Edit;
