import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface IButton extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: IButton) => {
  return (
    <TouchableOpacity {...props} style={styles.btnContainer}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
const GhostButton = ({ title, ...props }: IButton) => {
  return (
    <TouchableOpacity {...props} style={styles.btnGhostButton}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button, GhostButton };
