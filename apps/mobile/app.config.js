module.exports = ({ config }) => {
  if (process.env.EXPO_PROJECT_ID) {
    config.extra = {
      ...config.extra,
      eas: { projectId: process.env.EXPO_PROJECT_ID },
    };
  }

  return config;
};
