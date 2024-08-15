export interface IProfileTranslation {
  id: string;
  name: string;
  surname: string;
  profession: string;
  location: string;
  experience: string;
  university: string;
  universityAbout: string;
  aboutMe: string;
  languageCode: string;
  profileId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProfile {
  id: string;
  age: string;
  resume: string;
  image: string;
  mail: string;
  hobbys: IHobbys[];
  questions: IQuestions[];
  socials: ISocials[];
  translations: IProfileTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface IQuestionsTranslation {
  id: string;
  languageCode: string;
  answer: string;
  question: string;
  questionsId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestions {
  id: string;
  profileId: string;
  translations: IQuestionsTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface ISocials {
  id: string;
  profileId: string;
  name: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface IHobbysTranslation {
  id: string;
  languageCode: string;
  aboutHobby: string;
  hobby: string;
  hobbysId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IHobbys {
  id: string;
  profileId: string;
  image: string;
  translations: IHobbysTranslation[];
  createdAt: string;
  updatedAt: string;
}

export interface IProfileResponse {
  findFirstProfile: IProfile;
}
