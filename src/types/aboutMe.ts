export interface IAboutMeTranslation {
  id: string;
  name: string;
  about: string;
  role: string;
  country: string;
  city: string;
  languageCode: string;
  aboutMeId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAboutMe {
  id: string;
  image: string;
  experience: string;
  age: string;
  projectNum: string;
  translations: IAboutMeTranslation[];
  works: IWorks[];
  educations: IEducations[];
  languages: ILanguages[];
  certificates: ICertificates[];
  createdAt: string;
  updatedAt: string;
}

export interface IWorksTranslation {
  id: string;
  languageCode: string;
  company: string;
  role: string;
  description: string;
  location: string;
  locationType: string;
  employmentType: string;
  worksId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IWorks {
  id: string;
  aboutMeId: string;
  link: string;
  fromDate: string;
  toDate: string;
  translations: IWorksTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface IEducationsTranslation {
  id: string;
  languageCode: string;
  name: string;
  degree: string;
  fieldOfStudy: string;
  gpa: string;
  description: string;
  educationsId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEducations {
  id: string;
  aboutMeId: string;
  link: string;
  fromDate: string;
  toDate: string;
  translations: IEducationsTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface ICertificatesTranslation {
  id: string;
  languageCode: string;
  name: string;
  organiation: string;
  description: string;
  certificatesId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICertificates {
  id: string;
  aboutMeId: string;
  link: string;
  image: string;
  issueDate: string;
  expirationDate: string;
  translations: ICertificatesTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface ILanguagesTranslation {
  id: string;
  languageCode: string;
  name: string;
  description: string;
  level: string;
  languagesId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILanguages {
  id: string;
  aboutMeId: string;
  translations: ILanguagesTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface IAboutMeResponse {
  findFirstAboutMe: IAboutMe;
}

export interface IAboutMeElement {
  image: string;

  id: string;
  translations: IAboutMeElementTranslation[];
}

export interface IAboutMeElementTranslation {
  languageCode: string;
  id: string;
  about: string;
}

export interface IAboutMeElementResponse {
  findFirstAboutMe: IAboutMeElement;
}
