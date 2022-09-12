type Result = {
  air_date: string;
  characters: string[];
  created: Date;
  episode: string;
  id: number;
  name: string;
  url: string;
};

type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string | null;
};

export type Episode = {
  info: Info;
  results: Result[];
};
