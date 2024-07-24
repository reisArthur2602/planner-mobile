import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import { CategoryPickProps } from './category-picker';
import { styles } from './styles';
import { theme } from '../../../../theme';

const CategoryPick = ({ types, onChange, label, value }: CategoryPickProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <View style={styles.categoryContainer}>
        <Picker
          style={styles.categoryPicker}
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          dropdownIconColor={theme.colors.indigo600}
          selectionColor={theme.colors.indigo600}
        >
          {types.map((t) => (
            <Picker.Item
              key={t.type}
              label={t.title}
              value={t.type}
              style={styles.categoryItem}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default CategoryPick;
