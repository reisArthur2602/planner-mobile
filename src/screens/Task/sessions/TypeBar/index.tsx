import { View } from 'react-native';
import { TYPES } from '../../../../utils/types';

import { styles } from './styles';
import { TypeBarProps } from './type-bar';
import TypeIcon from '../TypeIcon';

const TypeBar = ({ type, types, onChange }: TypeBarProps) => {
  return (
    <View style={styles.typeContainer}>
      {types.map((t) => (
        <TypeIcon
        key={t.type}
          icon={t.icon}
          type={t.type}
          onChange={onChange}
          selected={t.type === type}
        />
      ))}
    </View>
  );
};

export default TypeBar;
