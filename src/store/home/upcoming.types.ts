export interface IRoot {
  data: TRoot | null;
}

export type TRoot = {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IOptions {
  method: string;
  url: string;
  params: IParams;
  headers: IHeader;
}

interface IParams {
  language: string;
  page: string;
}

interface IHeader {
  accept: string;
  Authorization: string;
}
