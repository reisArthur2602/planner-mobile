import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },

  categoryContainer: {
    height: 37,
    borderRadius: 6,
    borderColor: theme.colors.indigo700,
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
  },

  categoryPicker: {
    color: theme.colors.indigo50,
    flex: 1,
  },

  categoryItem: {
    width: '100%',
    color: theme.colors.indigo900,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
  },

  categoryLabel: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
    color: theme.colors.indigo50,
  },
});
