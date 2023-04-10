import { Sequelize } from "sequelize";
import 'dotenv/config'

const {
  POSTGRES_USER: user,
  POSTGRES_PASSWORD: password,
  POSTGRES_HOST: host,
  POSTGRES_PORT: port,
  POSTGRES_DATABASE: database,
} = process.env;

const uri = `postgresql://${user}:${password}@${host}:${port}/${database}`;
const PostGresSequelize = new Sequelize(uri);

export default PostGresSequelize;
