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
      link
      language
      id
      createdAt
    }
  }
`;

export const GET_BOOKS = gql`
  query findManyBooks {
    findManyBooks {
      id
      image
      link
      pages
      readedPages
      type
      stars
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

export const GET_BOOKS_BY_TYPE = gql`
  query findManyBooks(
    $type: String!
    $take: Int
    $skip: Int
    $stars: SortOrder
    $pages: SortOrder
    $releaseDate: SortOrder
  ) {
    findManyBooks(
      take: $take
      skip: $skip
      where: { type: { equals: $type } }
      orderBy: { stars: $stars, pages: $pages, releaseDate: $releaseDate }
    ) {
      id
      image
      link
      pages
      readedPages
      stars
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

export const GET_BOOKS_COUNT = gql`
  query countBooks($type: String!) {
    countBooks(type: $type)
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

export const GET_BLOG = gql`
  query findUniqueBlogs($id: String!) {
    findUniqueBlogs(where: { id: $id }) {
      updatedAt
      id
      link
      createdAt
      background
      translations {
        updatedAt
        markdown
        languageCode
        id
        headline
        createdAt
        blogsId
        about
      }
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

export const GET_MAINPROJECTS = gql`
  query findManyMainProjects($skip: Int, $take: Int, $createdAt: SortOrder!) {
    findManyMainProjects(
      skip: $skip
      take: $take
      orderBy: { createdAt: $createdAt }
    ) {
      video
      translations {
        updatedAt
        name
        mainProjectsId
        location
        languageCode
        description
        id
        createdAt
        about
      }
      updatedAt
      skills
      mobileBackgrounds
      link
      isReal
      images
      id
      github
      createdAt
      background
    }
  }
`;

export const GET_MAINPROJECT = gql`
  query findUniqueMainProjects($id: String!) {
    findUniqueMainProjects(where: { id: $id }) {
      video
      updatedAt
      translations {
        updatedAt
        name
        markdown
        mainProjectsId
        location
        languageCode
        id
        description
        createdAt
        about
      }
      skills
      mobileBackgrounds
      link
      isReal
      images
      id
      github
      createdAt
      background
    }
  }
`;

export const GET_ARCHIVES = gql`
  query archives($skip: Int, $take: Int, $createdAt: SortOrder!) {
    archives(take: $take, skip: $skip, orderBy: { createdAt: $createdAt }) {
      updatedAt
      skills
      link
      isReal
      id
      github
      createdAt
      background
      translations {
        updatedAt
        name
        location
        languageCode
        id
        description
        createdAt
        archiveId
      }
    }
  }
`;

export const GET_ARCHIVE = gql`
  query archive($id: String!) {
    archive(where: { id: $id }) {
      updatedAt
      translations {
        updatedAt
        name
        location
        languageCode
        id
        description
        createdAt
        archiveId
      }
      skills
      link
      isReal
      id
      github
      createdAt
      background
    }
  }
`;
