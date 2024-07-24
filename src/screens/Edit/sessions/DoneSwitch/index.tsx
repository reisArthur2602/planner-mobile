import { View, Text, Switch } from 'react-native';
import React from 'react';
import { DoneSwitchProps } from './done-switch';
import { styles } from './styles';
import { theme } from '../../../../theme';

const DoneSwitch = ({ label, onChange, value }: DoneSwitchProps) => {
  return (
    <View style={styles.doneContainer}>
      <Text style={styles.doneLabel}> {label}</Text>
      <Switch
  
        onValueChange={() => onChange(!value)}
        value={value}
        thumbColor={value ? theme.colors.indigo100 : theme.colors.indigo600}
        trackColor={{ false: theme.colors.indigo700, true: theme.colors.indigo600 }}
      />
    </View>
  );
};

export default DoneSwitch;
