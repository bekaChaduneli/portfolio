export interface ILinkedinTranslation {
  id: string;
  name: string;
  bio: string;
  company: string;
  university: string;
  languageCode: string;
  linkedinId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILinkedin {
  id: string;
  image: string;
  banner: string;
  link: string;
  posts: IPosts[];
  topSkills: ITopSkills[];
  translations: ILinkedinTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface ILinkedinResponse {
  findFirstLinkedin: ILinkedin;
}

export interface IPostsTranslation {
  id: string;
  languageCode: string;
  description: string;
  postsId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPosts {
  id: string;
  linkedinId: string;
  image?: string;
  likes: number;
  commentsSum: number;
  link: string;
  translations: IPostsTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface ITopSkillsTranslation {
  id: string;
  languageCode: string;
  name: string;
  topSkillsId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITopSkills {
  id: string;
  linkedinId: string;
  translations: ITopSkillsTranslation[];
  createdAt: string;
  updatedAt: string;
}
