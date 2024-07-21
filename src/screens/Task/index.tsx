import { SafeAreaView, View } from 'react-native';
import React from 'react';

import { styles } from './style';
import TypeBar from '../../components/TypeBar';
import { Input, Textarea } from '../../components/Input';

const Task = () => {
  return (
    <SafeAreaView style={styles.taskContainer}>
      <TypeBar />
      <Input label="Título" placeholder="Título da tarefa" />
      <Textarea
        label="Descrição"
        placeholder="Descrição da tarefa"
        multiline
        numberOfLines={4}
      />
    </SafeAreaView>
  );
};

export default Task;
