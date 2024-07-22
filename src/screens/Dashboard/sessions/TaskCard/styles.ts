import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  taskContainer: {
    maxHeight: 80,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 24,
    borderColor: theme.colors.indigo700,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconTask: {
    backgroundColor: theme.colors.indigo600,
    width: 45,
    height: 45,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    
    fontSize: theme.font_size.sm,
    color: theme.colors.indigo50,
    fontFamily: theme.font_weight.semibold,
  },
  dateInfo: {
    fontSize: 10,
    color: theme.colors.indigo100,
    fontFamily: theme.font_weight.regular,
  },
});
