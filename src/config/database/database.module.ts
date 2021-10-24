import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config.service';
import { ConfigModule } from '../config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          name: 'default',
          type: 'mysql',
          host: config.DB_HOST,
          port: config.DB_PORT,
          username: config.DB_USERNAME,
          password: config.DB_PASSWORD,
          database: config.DB_DATABASE,
          entities: [
            __dirname + '/../../entities/**/*{.ts,.js}',
            __dirname + '/../../**/*.entity{.ts,.js}',
          ],
          synchronize: true,
          timezone: 'Z',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
