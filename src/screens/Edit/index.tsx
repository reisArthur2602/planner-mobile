import {
  Text,
  SafeAreaView,
  View,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootTabParamList } from '../../routes/Tab/tab';
import { TypeTask } from '../../@types/task';
import { TaskService } from '../../services/task/TaskService';
import { Input } from '../../components/ui/Input';
import { DateTime } from '../../components/ui/DateTime';
import { Button } from '../../components/ui/Button';
import CategoryPick from './sessions/CategoryPicker';
import { TYPES } from '../../utils/types';
import DoneSwitch from './sessions/DoneSwitch';
import { theme } from '../../theme';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Trash } from 'lucide-react-native';
import { confirmModal } from '../../utils/confirm';

const Edit = () => {
  const { params } = useRoute<RouteProp<RootTabParamList, 'Edit'>>();
  const navigate =
    useNavigation<BottomTabNavigationProp<RootTabParamList, 'Dashboard'>>();
  const isFocused = useIsFocused();

  const [type, setType] = useState<TypeTask>('gym');
  const [done, setDone] = useState<boolean>(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const fetchTask = async () => {
    const response = await TaskService.getById(params.id);
    setTitle(response.title);
    setDescription(response.description);
    setType(response.type);
    setDone(response.done);
    setDate(new Date(response.when));
    setTime(new Date(response.when));
  };

  const removeTask = async () => {
    await TaskService.remove(params.id);
    alert('Tarefa foi excluída com sucesso!');
    navigate.navigate('Dashboard');
  };

  useEffect(() => {
    fetchTask();
  }, [params.id]);

  return (
    <ScrollView
      alwaysBounceVertical
      contentContainerStyle={{
        gap: 12,
        backgroundColor: theme.colors.indigo900,
        padding: 24,
      }}
    >
      <CategoryPick
        types={TYPES}
        onChange={setType}
        value={type}
        label="Categoria"
      />
      <Input>
        <Input.Label>Título</Input.Label>
        <Input.Field
          placeholder="Título da tarefa"
          value={title}
          onChangeText={setTitle}
        />
      </Input>
      <Input>
        <Input.Label>Descrição</Input.Label>
        <Input.Textarea
          placeholder="Descrição da tarefa"
          value={description}
          onChangeText={setDescription}
        />
      </Input>
      <DateTime mode="date" onChange={setDate} value={date} />
      <DateTime mode="time" onChange={setTime} value={time} />
      <DoneSwitch
        label={done ? 'Concluída' : 'Concluir'}
        onChange={setDone}
        value={done}
      />
      <View style={{ gap: 12 }}>
        <Button.Filled>
          <Button.Label>Salvar</Button.Label>
        </Button.Filled>
        <Button
          onPress={() =>
            confirmModal({
              title: 'Deseja realmente excluir a tarefa?',
              onPress: removeTask,
            })
          }
        >
          <Trash size={16} color={theme.colors.indigo50} />
          <Button.Label>Excluir</Button.Label>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Edit;
