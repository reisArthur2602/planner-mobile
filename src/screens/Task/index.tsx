import { Pressable, SafeAreaView } from 'react-native';
import { styles } from './style';
import TypeBar from '../../components/TypeBar';
import { Input, Textarea } from '../../components/Input';

import React, { useState } from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format, isPast } from 'date-fns';

const Task = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleSelectDate = (e: DateTimePickerEvent, selectData?: Date) => {
    if (isPast(new Date(selectData || date))) {
      alert('Defina uma data no futuro');
      setShowDate(false);
      return;
    }
    setDate(selectData || date);
    setShowDate(false);
  };

  const handleSelectTime = (e: DateTimePickerEvent, selectTime?: Date) => {
    if (isPast(new Date(selectTime || time))) {
      alert('Defina uma hora no futuro');
      setShowTime(false);
      return;
    }
    setTime(selectTime || time);
    setShowTime(false);
  };

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
    </SafeAreaView>
  );
};

export default Task;
