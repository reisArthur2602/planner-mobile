import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 72,
    paddingHorizontal:24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: theme.colors.indigo900,
    borderBottomColor: theme.colors.indigo800,
    borderBottomWidth: 3,
    borderStyle: 'solid',
  },
  logo: {
    width: 96,
    height: 24,
    
  },
});
