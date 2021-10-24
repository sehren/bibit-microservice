import { Module } from '@nestjs/common';
import { ApiModule } from './modules/api/api.module';
import { MovieModule } from './modules/movie/movie.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [DatabaseModule, ApiModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
