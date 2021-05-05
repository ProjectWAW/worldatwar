import dotenv from 'dotenv';

dotenv.config();

type Config = {
  App: {
    Port: string;
  };
  DB: {
    AuthSource: string;
    Host: string;
    Password: string;
    Port: string;
    User: string;
  };
};

function createConfig(): Config {
  const config = {
    App: {
      Port: process.env.APP_PORT
    },
    DB: {
      AuthSource: process.env.DB_AUTH_SOURCE,
      Host: process.env.DB_HOST,
      Password: process.env.DB_PASSWORD,
      Port: process.env.DB_PORT,
      User: process.env.DB_USER
    }
  } as Config;

  return config;
}

const Config = createConfig();

export default Config;
