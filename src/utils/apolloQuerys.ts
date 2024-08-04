import { gql } from "@apollo/client";

export const GET_GITHUBREPOS = gql`
  query findManyGithubRepos {
    findManyGithubRepos {
      updatedAt
      translations {
        updatedAt
        title
        languageCode
        id
        githubReposId
        description
        createdAt
      }
      stars
      link
      language
      id
      createdAt
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks($type: String!) {
    findManyBooks(where: { type: { equals: $type } }) {
      id
      image
      link
      pages
      readedPages
      type
      finished
      releaseDate
      index
      translations {
        id
        title
        description
        author
        languageCode
        booksId
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query findFirstProfile {
    findFirstProfile {
      updatedAt
      translations {
        updatedAt
        universityAbout
        university
        surname
        profileId
        profession
        name
        location
        languageCode
        id
        experience
        createdAt
        aboutMe
      }
      socials {
        updatedAt
        profileId
        name
        link
        createdAt
        id
      }
      resume
      questions {
        updatedAt
        translations {
          updatedAt
          questionsId
          question
          languageCode
          id
          createdAt
          answer
        }
        profileId
        id
        createdAt
      }
      mail
      image
      id
      hobbys {
        updatedAt
        translations {
          updatedAt
          languageCode
          id
          hobbysId
          createdAt
          hobby
          aboutHobby
        }
        profileId
        image
        id
        createdAt
      }
      createdAt
      age
    }
  }
`;

export const GET_LINKEDIN = gql`
  query MyQuery {
    findFirstLinkedin {
      updatedAt
      translations {
        updatedAt
        university
        name
        linkedinId
        languageCode
        id
        createdAt
        company
        bio
      }
      topSkills {
        linkedinId
        id
        createdAt
        updatedAt
        translations {
          updatedAt
          topSkillsId
          name
          languageCode
          id
          createdAt
        }
      }
      posts {
        translations {
          updatedAt
          reatedAt
          postsId
          languageCode
          id
          description
        }
        updatedAt
        linkedinId
        link
        likes
        image
        id
        createdAt
        commentsSum
      }
      image
      id
      createdAt
      banner
    }
  }
`;
