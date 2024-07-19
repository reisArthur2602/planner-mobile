import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    gap: 6,
  },
  label: {
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
    color: theme.colors.indigo50,
  },
  input: {
    height: 37,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: theme.colors.indigo700,
    borderWidth: 1,
    borderStyle: 'solid',
    color: theme.colors.indigo100,
  },
});
