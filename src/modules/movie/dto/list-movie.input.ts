import { Type } from 'class-transformer';

export class ListMovieInput {
  @Type(() => String)
  keyword: string;

  @Type(() => Number)
  page: number;
}
