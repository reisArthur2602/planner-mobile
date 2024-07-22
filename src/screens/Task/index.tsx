import { Pressable, SafeAreaView, View } from 'react-native';
import { styles } from './style';
import TypeBar from '../../components/TypeBar';

import React, { useState } from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Button, GhostButton } from '../../components/Button';
import { TaskService } from '../../services/task/TaskService';
import { useDashboard } from '../../hooks/useDashboard';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

const Task = () => {
  const navigate = useNavigation();
  const { toggleType, type } = useDashboard();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onSubmit = async () => {
    const data = {
      title,
      description,
      type,
      when: `${format(date, 'yyyy-MM-dd')}T${format(time, 'HH:mm')}:00.000`,
    };
    await TaskService.create(data);
    alert('Tarefa criada com sucesso!');
    toggleType('gym');
    setTitle('');
    setDescription('');
    setDate(new Date());
    setTime(new Date());
    navigate.goBack();
  };

  const handleSelectDate = (e: DateTimePickerEvent, selectData?: Date) => {
    setDate(selectData || date);
    setShowDate(false);
  };

  const handleSelectTime = (e: DateTimePickerEvent, selectTime?: Date) => {
    setTime(selectTime || time);
    setShowTime(false);
  };

  return (
    <SafeAreaView style={styles.taskContainer}>
      <TypeBar />

      <Input>
        <Input.Label>Título</Input.Label>
        <Input.Field placeholder="Título da tarefa" onChangeText={setTitle} />
      </Input>

      <Input>
        <Input.Textarea>Descrição</Input.Textarea>
        <Input.Field
          placeholder="Descrição da tarefa"
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
        />
      </Input>

      <Pressable onPress={() => setShowDate(true)}>
        <Input>
          <Input.Label>Data</Input.Label>
          <Input.Field editable={false} value={format(date, 'yyyy-MM-dd')} />
        </Input>
      </Pressable>

      {showDate && (
        <DateTimePicker
          value={date}
          onChange={handleSelectDate}
          mode="date"
          display="spinner"
        />
      )}

      <Pressable onPress={() => setShowTime(true)}>
        <Input>
          <Input.Label>Hora</Input.Label>
          <Input.Field editable={false} value={format(time, 'HH:mm')} />
        </Input>
      </Pressable>

      {showTime && (
        <DateTimePicker
          value={time}
          onChange={handleSelectTime}
          mode="time"
          display="clock"
        />
      )}

      <View style={{ gap: 12 }}>
        <Button title="Criar" onPress={onSubmit} />
        <GhostButton title="Cancelar" />
      </View>
    </SafeAreaView>
  );
};

export default Task;
