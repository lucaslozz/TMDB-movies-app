export interface Movie {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}

export interface Keyword {
  id: number;
  name: string;
}

export interface MovieKeywordsResponse {
  id: number;
  keywords: Keyword[];
}
