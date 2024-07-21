import { SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FilterBar from '../../components/FilterBar';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      {/* filtro */}
      <FilterBar />
    </SafeAreaView>
  );
};

export default Dashboard;
