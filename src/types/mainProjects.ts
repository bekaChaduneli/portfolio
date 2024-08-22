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

export interface IMainProjectsHoverTranslation {
  languageCode: string;
  description: string;
  name: string;
}

export interface IMainProjectsHover {
  id: string;
  background: string;
  translations: IMainProjectsTranslation[];
}

export interface IMainProjectsHoverResponse {
  findManyMainProjects: IMainProjectsHover[];
}
