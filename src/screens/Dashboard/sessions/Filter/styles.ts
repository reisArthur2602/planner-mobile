import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  filterText: {
    fontFamily: theme.font_weight.bold,
    fontSize: theme.font_size.sm,
    color: theme.colors.indigo50,
    opacity: 0.3,
  },

  selectedFilter: {
    color: theme.colors.indigo600,
    opacity: 1,
  },
});
