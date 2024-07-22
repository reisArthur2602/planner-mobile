import { View, Image } from 'react-native';
import { styles } from './styles';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
    </View>
  );
};

export default Header;
