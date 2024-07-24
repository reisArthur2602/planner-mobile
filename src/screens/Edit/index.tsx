import { Text, SafeAreaView, View, Switch, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useIsFocused, useRoute } from '@react-navigation/native';
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

const Edit = () => {
  const { params } = useRoute<RouteProp<RootTabParamList, 'Edit'>>();

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

  useEffect(() => {
    fetchTask();
  }, [isFocused]);

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
      <DoneSwitch label="Concluir" onChange={setDone} value={done} />
      <View style={{ gap: 12 }}>
        <Button.Filled>
          <Button.Label>Salvar</Button.Label>
        </Button.Filled>

        <Button>
          <Button.Label>Excluir</Button.Label>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Edit;
