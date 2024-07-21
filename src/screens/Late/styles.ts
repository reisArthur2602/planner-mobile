import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  LateContainer: {
    flex: 1,
    backgroundColor: theme.colors.indigo900,
    gap: 12,
    padding: 18,
  },
  lateTitle: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_weight.bold,
    color: theme.colors.indigo50,
  },
  lateCount: {
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_weight.bold,
    color: theme.colors.indigo100,
  },
});
