import { View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

import { LogOut } from 'lucide-react-native';
import { theme } from '../../../theme';

const Header = () => {
  const { handleLogout, auth } = useAuth();
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      {auth && (
        <Pressable onPress={handleLogout}>
          <LogOut size={20} color={theme.colors.indigo50} strokeWidth={3} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
