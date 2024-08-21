export interface IMainProjectsTranslation {
  languageCode: string;
  description: string;
  name: string;
  about: string;
  location: string;
}

export interface IMainProjects {
  id: string;
  background: string;
  video: string[];
  skills: string[];
  isReal: boolean;
  translations: IMainProjectsTranslation[];
}

export interface IMainProjectsResponse {
  findManyMainProjects: IMainProjects[];
}
