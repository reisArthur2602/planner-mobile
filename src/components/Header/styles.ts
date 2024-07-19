import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: theme.colors.indigo900,
    borderBottomColor: theme.colors.indigo800,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 96,
    height: 24,
  },
});
