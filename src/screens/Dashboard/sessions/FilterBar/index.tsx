import { Pressable, Text, View } from 'react-native';
import React from 'react';

import { activeStyle, defaultStyle, styles } from './styles';
import { useDashboard } from '../../../../hooks/useDashboard';

import { FilterBarProps } from './filter-bar';
import Filter from '../Filter';

const FilterBar = ({ filters, filter, onChange }: FilterBarProps) => {
  // const { filter, toggleFilter } = useDashboard();

  return (
    <View style={styles.filterContainer}>
      {filters.map((f) => (
        <Filter
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
