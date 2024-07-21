import { Pressable, SafeAreaView, View } from 'react-native';
import { styles } from './style';
import TypeBar from '../../components/TypeBar';
import { Input, Textarea } from '../../components/Input';

import React, { useState } from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format, isPast } from 'date-fns';
import { Button, GhostButton } from '../../components/Button';
import { TaskService } from '../../services/task/TaskService';
import { useDashboard } from '../../hooks/useDashboard';
import { useNavigation } from '@react-navigation/native';

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
      <Input
        label="Título"
        placeholder="Título da tarefa"
        onChangeText={setTitle}
      />
      <Textarea
        label="Descrição"
        placeholder="Descrição da tarefa"
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
      />

      <Pressable onPress={() => setShowDate(true)}>
        <Input
          label="Data"
          editable={false}
          value={format(date, 'yyyy-MM-dd')}
        />
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
        <Input label="Hora" editable={false} value={format(time, 'HH:mm')} />
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
