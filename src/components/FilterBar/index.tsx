import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FilterOptions } from '../../@types/filter';
import { activeStyle, defaultStyle, styles } from './styles';
import { useDashboard } from '../../hooks/useDashboard';
import { theme } from '../../theme';

interface IFilterData {
  type: FilterOptions;
  title: string;
}

const FilterData: IFilterData[] = [
  { type: 'all', title: 'Todos' },
  { type: 'today', title: 'Hoje' },
  { type: 'week', title: 'Semana' },
  { type: 'month', title: 'Mês' },
  { type: 'year', title: 'Ano' },
] as const;

const FilterBar = () => {
  const { filter, toggleFilter } = useDashboard();

  return (
    <View style={styles.filterContainer}>
      {FilterData.map((f) => (
        <TouchableOpacity key={f.type} onPress={() => toggleFilter(f.type)}>
          <Text
            style={[
              styles.filterText,
              f.type === filter ? activeStyle : defaultStyle,
            ]}
          >
            {f.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterBar;
