import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { ListMovieDto } from './dto/list-movie.dto';
import { HttpClient } from '../../helpers';

@Injectable()
export class ApiService extends HttpClient {
  constructor(private readonly configService: ConfigService) {
    super(`${configService.API_URL}/?apikey=${configService.API_KEY}=`);
  }

  public listMovie = (keyword: string, page: number) =>
    this.instance.get<ListMovieDto>(`${keyword}&page=${page}`);
}
