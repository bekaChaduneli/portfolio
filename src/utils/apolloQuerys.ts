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
