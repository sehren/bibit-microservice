import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { ApiModule } from '../api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Search]), ApiModule],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
