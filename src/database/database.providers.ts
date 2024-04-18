import { DataSource, DataSourceOptions } from 'typeorm';


const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'initialdatabase',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['./dist/migration/**.js'],
}

export const dataSource = new DataSource(dataSourceOptions);

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export default dataSourceOptions;
