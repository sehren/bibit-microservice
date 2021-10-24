import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { responseError } from '../../helpers';
import { ListMovieInput } from './dto/list-movie.input';
import { ListMovieResponse } from './dto/list-movie.response';
import { InjectRepository } from '@nestjs/typeorm';
import { Search } from '../../entities';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Search)
    private readonly searchRepository: Repository<Search>,
    private readonly apiService: ApiService,
  ) {}
  async list(listMovieInput: ListMovieInput): Promise<ListMovieResponse> {
    try {
      const { keyword, page } = listMovieInput;
      const listMovie = await this.apiService.listMovie(keyword, page);
      await this.saveKeyword(keyword);
      return { movies: listMovie.Search };
    } catch (err) {
      throw await responseError(err.message || err.name);
    }
  }

  async saveKeyword(keyword: string): Promise<Search> {
    try {
      const search = this.searchRepository.create({ keyword });
      await this.searchRepository.save(search);
      return search;
    } catch (err) {
      throw await responseError(err.message || err.name);
    }
  }
}
