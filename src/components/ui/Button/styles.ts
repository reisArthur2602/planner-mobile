import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 33,
    backgroundColor: theme.colors.indigo600,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
    color: theme.colors.indigo50,
  },
  btnGhostButton: {
    width: '100%',
    height: 33,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
