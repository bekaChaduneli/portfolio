export interface IGithubRepo {
  id: string;
  link: string;
  stars: string;
  language: string;
  translations: IGithubRepoTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface IGithubRepoTranslation {
  id: string;
  title: string;
  description: string;
  languageCode: string;
  githubReposId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGithubRepoResponse {
  findManyGithubRepos: IGithubRepo;
}
