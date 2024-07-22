import { StyleSheet } from 'react-native';
import { theme } from '../../theme';


export const styles = StyleSheet.create({
  typeContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.indigo600,
    width: 45,
    height: 45,
    opacity: 0.3,
  },
});

export const activeStyle = {
  opacity: 1,
};
