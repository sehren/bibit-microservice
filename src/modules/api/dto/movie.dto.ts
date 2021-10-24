import { Type } from 'class-transformer';

export class MovieDto {
  @Type(() => String)
  title: string;

  @Type(() => String)
  year: string;

  @Type(() => String)
  imdbID: string;

  @Type(() => String)
  type: string;

  @Type(() => String)
  poster: string;
}
