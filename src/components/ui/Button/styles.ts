import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    gap: 6,
  },

  btnText: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
    color: theme.colors.indigo50,
  },
});
