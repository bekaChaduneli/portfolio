export interface IBooksResponse {
  findManyBooks: IBook[];
}

export interface IBooksCountResponse {
  countBooks: number;
}

export interface IBook {
  id: string;
  image: string;
  link: string;
  pages: string;
  readedPages: string;
  type: string;
  finished: boolean;
  stars: number;
  releaseDate: any;
  index: string;
  translations: IBookTranslation[];
}

export interface IBookTranslation {
  id: string;
  title: string;
  description: string;
  author: string;
  languageCode: string;
  booksId: string;
  createdAt: any;
  updatedAt: any;
}
