export interface IRecommendationsTranslation {
  id: string;
  languageCode: string;
  name: string;
  recommendationsId: string;
  bio: string;
  role: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRecommendations {
  id: string;
  image?: string;
  date: string;
  translations: IRecommendationsTranslation[];
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRecommendationsResponse {
  findManyRecommendations: IRecommendations[];
}
