import { TouchableOpacity } from 'react-native';

import { TypeIconProps } from './type-icon';
import { styles } from './styles';

const TypeIcon = ({ icon, onChange, type, selected }: TypeIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(type)}
      style={[styles.iconContainer, selected && styles.active]}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default TypeIcon;
