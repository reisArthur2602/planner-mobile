import { TYPES } from '../../utils/types';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { TaskService } from '../../services/task/TaskService';
import { TypeTask } from '../../@types/task';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

import { Alert, SafeAreaView, View } from 'react-native';

import TypeBar from './sessions/TypeBar';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { DateTime } from '../../components/ui/DateTime';

import { styles } from './style';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/Tab/tab';

const Task = () => {
  const navigate =
    useNavigation<BottomTabNavigationProp<RootTabParamList, 'Dashboard'>>();

  const [type, setType] = useState<TypeTask>('gym');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const isFocused = useIsFocused();

  const onSubmit = async () => {
    const formatToIso = new Date(
      `${format(date, 'yyyy-MM-dd')}T${format(time, 'HH:mm')}:00.000`
    ).toISOString();

    await TaskService.create({
      title,
      description,
      type,
      when: formatToIso,
    });

    navigate.navigate('Dashboard');
    Alert.alert('Tarefa criada com sucesso!');
  };

  useEffect(() => {
    setType('gym');
    setTitle('');
    setDescription('');
    setDate(new Date());
    setTime(new Date());
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.taskContainer}>
      <TypeBar type={type} onChange={setType} types={TYPES} />

      <Input>
        <Input.Label>Título</Input.Label>
        <Input.Field
          placeholder="Título da tarefa"
          onChangeText={setTitle}
          value={title}
        />
      </Input>

      <Input>
        <Input.Label>Descrição</Input.Label>
        <Input.Textarea
          placeholder="Descrição da tarefa"
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
          value={description}
        />
      </Input>

      <DateTime mode="date" onChange={setDate} value={date} />
      <DateTime mode="time" onChange={setTime} value={time} />

      <View style={{ gap: 12 }}>
        <Button.Filled onPress={onSubmit}>
          <Button.Label>Criar</Button.Label>
        </Button.Filled>

        <Button>
          <Button.Label>Cancelar</Button.Label>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Task;
