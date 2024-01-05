const ENV = process.env;

const config = {
  app: {
    env: ENV.REACT_APP_ENV,
    version: ENV.npm_package_version,
    isDev: ENV.REACT_APP_ENV !== 'production',
    editorApiKey: ENV.EDITOR_API_KEY,
  },
  api: {
    baseUrl: ENV.REACT_APP_API_BASE_URL,
    downloadUrl: `${ENV.REACT_APP_API_BASE_URL}/references/download`,
  },
  language: {
    key: 'language',
    initial: 'oz',
    list: ['oz', 'uz', 'ar', 'ru', 'en'],
  },
  list: {
    perPage: 10,
  },
};

export default config;
