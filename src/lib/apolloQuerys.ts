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
