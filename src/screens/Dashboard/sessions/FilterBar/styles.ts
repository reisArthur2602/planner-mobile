import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterText: {
    fontFamily: theme.font_weight.bold,
    fontSize: theme.font_size.sm,
  },
});

export const activeStyle = {
  color: theme.colors.indigo600,
};

export const defaultStyle = {
  color: theme.colors.indigo50,
  opacity: 0.3,
};
