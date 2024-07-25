import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap:16
  },
  emptyText: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_weight.medium,
    color: theme.colors.indigo600,
  },
});
