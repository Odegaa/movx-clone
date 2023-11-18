export interface ICredits {
  cast: ICast[];
}

export interface IRootState {
  filters: IFilterProps;
  category: ICategoryState;
  movies: IMovieState;
  actors: IActorState;
  search: ISearchState;
  favorites: IMovieData[] | [];
}

export interface IFilterProps {
  category: string;
  sort: TSortType;
  year: string;
  query: string;
}

export interface IFilterState {
  tv: IFilterProps;
  discover: IFilterProps;
}

export type TSortType =
  | "popularity.desc"
  | "popularity.asc"
  | "release_date.desc"
  | "release_date.asc"
  | "vote_count.desc"
  | "vote_count.asc"
  | "original_title.asc"
  | "original_title.desc";

export interface IGenre {
  genres: ICategory[];
}

export interface ICategoryState {
  category: ICategory[];
  current: IResponse<IMovieData[]> | null;
}

export interface IMovieState {
  trending: IResponse<IMovieData[]> | null;
  discover: IResponse<IMovieData[]> | null;
  current: {
    movie: IMovieData | null;
    keywords: IKeyword[];
    casts: IActor[];
    reviews: IReview[];
  };
  popular: IResponse<IMovieData[]> | null;
  topRated: IResponse<IMovieData[]> | null;
  upcoming: IResponse<IMovieData[]> | null;
  tvShows: IResponse<IMovieData[]> | null;
}

export interface IActorState {
  people: IResponse<IActor[]> | null;
  current: {
    actor: IActor | null;
    casting: IMovieData[] | [];
  };
}

export interface ISearchState {
  query: string;
  tv: IResponse<IMovieData[]> | null;
  movies: IResponse<IMovieData[]> | null;
  people: IResponse<IActor[]> | null;
  recent: string[];
}

export type TMediaType = "movie" | "tv";

export interface IMovie {
  movie: IMovieData | null;
}

export interface IMovieData {
  adult?: boolean;
  name?: string;
  id: number;
  poster_path: string;
  original_name: string;
  original_title: string;
  original_language: string;
  release_date: string;
  first_air_date: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  title: string;
  homepage: string;
  genres: ICategory[];
  overview: string;
  popularity: number;
  budget: number;
  category_ids: IMovieCategoryIds;
  imdb_id: string | null;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  media_type?: TMediaType;
  video?: boolean;
  videos: {
    id: number;
    results: IVideo[];
  };
  similar?: IResponse<IMovieData[]>;
  images?: {
    backdrops: IImage[];
    posters: IImage[];
  };
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  size: 360 | 480 | 720 | 1080;
  type: "Trailer" | "Behind the Scenes";
}

export type IMovieCategoryIds = Array<number>;

export interface IImage {
  file_path: string;
  aspect_ratio: number;
  height: number;
  width: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IKeywordState {
  keywords: IKeyword[];
}

export interface IKeyword {
  id: number;
  name: string;
}

export interface IReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface ICast {
  adult: boolean;
  category: number;
  id: number;
  known_for?: IMovieData[];
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  other: number;
}

export interface IActor extends ICast {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  homepage: string | null;
  imdb_id: string;
  place_of_birth: string;
  images: {
    profiles: IImage[];
  };
}

export interface IResponse<T> {
  page: number;
  results: T;
  total_results: number;
  total_pages: number;
}
