import { View } from 'react-native';
import React from 'react';

import { styles } from './styles';

import { FilterBarProps } from './filter-bar';
import Filter from '../Filter';

const FilterBar = ({ filters, filter, onChange }: FilterBarProps) => {
  return (
    <View style={styles.filterContainer}>
      {filters.map((f) => (
        <Filter
          key={f.type}
          filter={f.type}
          title={f.title}
          onChange={onChange}
          selected={f.type === filter}
        />
      ))}
    </View>
  );
};

export default FilterBar;
