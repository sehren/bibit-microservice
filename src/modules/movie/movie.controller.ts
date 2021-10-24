import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { ListMovieInput } from './dto/list-movie.input';
import { ListMovieResponse } from './dto/list-movie.response';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/list')
  async list(
    @Query() listMovieInput: ListMovieInput,
  ): Promise<ListMovieResponse> {
    return await this.movieService.list(listMovieInput);
  }

  @GrpcMethod('MovieService')
  async listMovies(listMovieInput: ListMovieInput): Promise<ListMovieResponse> {
    return await this.movieService.list(listMovieInput);
  }
}
