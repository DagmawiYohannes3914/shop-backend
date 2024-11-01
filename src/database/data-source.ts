import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  entities: ['dist/domain/**/*.entity.js'], // Path to compiled entities
  migrations: ['dist/database/migrations/*.js'], // Path to compiled migrations
})