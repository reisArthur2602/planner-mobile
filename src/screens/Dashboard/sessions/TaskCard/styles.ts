import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  taskContainer: {
    maxHeight: 80,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderColor: theme.colors.indigo700,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:12
  },
  iconTask: {
    backgroundColor: theme.colors.indigo600,
    width: 40,
    height: 40,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: theme.font_size.md,
    color: theme.colors.indigo50,
    fontFamily: theme.font_weight.semibold,
    overflow:'hidden'
  },
  dateInfo: {
    fontSize: 10,
    color: theme.colors.indigo100,
    fontFamily: theme.font_weight.regular,
  },
  doneTask :{
    opacity:0.3
  }
});
