import { Pressable, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

import { FilterProps } from './filter';

const Filter = ({ filter, title, selected, onChange }: FilterProps) => {
  return (
    <Pressable style={styles.filterContainer}>
      <Text
        style={[styles.filterText, selected && styles.selectedFilter]}
        onPress={() => onChange(filter)}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Filter;
