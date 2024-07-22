import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    backgroundColor: theme.colors.indigo600,
    borderRadius: 99,
  },
  active: { opacity: 1 },
});
