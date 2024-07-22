import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../theme';

const Button = ({ children, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const Filled = ({ children, style, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, { backgroundColor: theme.colors.indigo600 }]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

const Label = ({ children }: TextProps) => {
  return <Text style={styles.btnText}>{children}</Text>;
};

Button.Label = Label;
Button.Filled = Filled;

export { Button };
