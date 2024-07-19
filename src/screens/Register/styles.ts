import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: theme.colors.indigo900,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:25
  },
  formContainer: {
   width:"100%",
    gap: 24,
   
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.font_weight.bold,
    fontSize: theme.font_size.x_lg,
    color: theme.colors.indigo50,
  },
  subtitle: {
    fontFamily: theme.font_weight.regular,
    fontSize: theme.font_size.md,
    color: theme.colors.indigo100,
  },

  linkContainer: {
    textAlign: 'center',
    fontFamily: theme.font_weight.regular,
    fontSize: theme.font_size.sm,
    color: theme.colors.indigo50,
  },
  linkHighlight: {
    fontFamily: theme.font_weight.semibold,
    fontSize: theme.font_size.sm,
    color: theme.colors.indigo600,
  },
});
