import dotenv from "dotenv";

dotenv.config();

type Config = {
  App: {
    Port: string;
  };
  DB: {
    Host: string;
    Port: string;
    AuthSource: string;
  };
};

function createConfig(): Config {
  let config = {
    App: {
      Port: process.env.APP_PORT,
    },
    DB: {
      Host: process.env.DB_HOST,
      Port: process.env.DB_PORT,
      AuthSource: process.env.DB_AUTH_SOURCE,
    },
  } as Config;

  return config;
}

const Config = createConfig();

export default Config;
