export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export interface GameDetails {
  id: number;
  name: string;
  name_original: string;
  description_raw: string;
  slug: string;
  background_image: string;
  metacritic: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
