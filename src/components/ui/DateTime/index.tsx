import { format } from 'date-fns';
import { useState } from 'react';

import { Pressable } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { Input } from '../Input';
import { DateTimeProps } from './date-time';

const DateTime = ({ onChange, value, mode }: DateTimeProps) => {
  const [show, setShow] = useState(false);

  const handlePick = (e: DateTimePickerEvent, pickDate?: Date) => {
    onChange(pickDate || value);
    setShow(false);
  };

  return (
    <Pressable onPress={() => setShow(true)}>
      <Input>
        <Input.Label>{mode === 'date' ? 'Data' : 'Hora'}</Input.Label>
        <Input.Field
          editable={false}
          value={format(value, mode === 'date' ? 'yyyy-MM-dd' : 'HH:mm')}
        />
      </Input>

      {show && (
        <DateTimePicker
          value={value}
          onChange={handlePick}
          mode={mode}
          display={mode === 'date' ? 'spinner' : 'clock'}
        />
      )}
    </Pressable>
  );
};


export { DateTime };

