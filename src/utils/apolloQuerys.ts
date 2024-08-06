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

export const GET_SKILLS = gql`
  query findManySkills {
    findManySkills {
      updatedAt
      translations {
        updatedAt
        name
        languageCode
        skillsId
        id
        createdAt
        about
      }
      link
      image
      id
      createdAt
      color
    }
  }
`;

export const GET_BLOGS = gql`
  query findManyBlogs($skip: Int!, $take: Int!) {
    findManyBlogs(skip: $skip, take: $take) {
      updatedAt
      translations {
        markdown
        updatedAt
        languageCode
        id
        headline
        createdAt
        blogsId
        about
      }
      link
      id
      createdAt
      background
    }
  }
`;

export const GET_ABOUTME = gql`
  query findFirstAboutMe {
    findFirstAboutMe {
      updatedAt
      projectNum
      image
      id
      experience
      createdAt
      age
      translations {
        updatedAt
        role
        name
        languageCode
        id
        createdAt
        country
        city
        aboutMeId
        about
      }
      works {
        updatedAt
        translations {
          worksId
          updatedAt
          role
          locationType
          languageCode
          location
          id
          employmentType
          description
          createdAt
          company
        }
        toDate
        link
        id
        fromDate
        createdAt
        aboutMeId
      }
      languages {
        updatedAt
        translations {
          updatedAt
          name
          level
          languagesId
          languageCode
          id
          description
          createdAt
        }
        id
        createdAt
        aboutMeId
      }
      education {
        updatedAt
        translations {
          updatedAt
          name
          languageCode
          gpa
          id
          fieldOfStudy
          educationsId
          description
          degree
          createdAt
        }
        toDate
        link
        id
        fromDate
        createdAt
        aboutMeId
      }
      certificates {
        updatedAt
        translations {
          organiation
          updatedAt
          name
          languageCode
          id
          description
          createdAt
          certificatesId
        }
        link
        issueDate
        image
        id
        expirationDate
        createdAt
        aboutMeId
      }
    }
  }
`;

export const GET_SERVICES = gql`
  query findManyServices {
    findManyServices {
      updatedAt
      order
      id
      createdAt
      background
      translations {
        servicesId
        updatedAt
        name
        languageCode
        id
        description
        createdAt
      }
    }
  }
`;

export const GET_RECOMMENDATIONS = gql`
  query findManyRecommendations {
    findManyRecommendations {
      createdAt
      date
      id
      updatedAt
      image
      translations {
        updatedAt
        role
        recommendationsId
        name
        languageCode
        id
        description
        createdAt
        bio
      }
    }
  }
`;
