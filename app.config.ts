import 'dotenv/config';

interface ExpoConfig {
  name: string;
  slug: string;
  version: string;
  extra: {
    apiUrl: string;
  };
}

const config: ExpoConfig = {
  name: 'Planner',
  slug: 'Planner',
  version: '1.0.0',
  extra: {
    apiUrl: process.env.API_URL || '',
  },
};

export default {
  expo: config,
};