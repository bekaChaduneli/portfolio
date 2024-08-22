import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_MAINPROJECTSHOVER } from "@/utils/apolloQuerys";
import { IMainProjectsHoverResponse } from "@/types/mainProjects";

export const useProjectData = (locale: string) => {
  const { data, loading, error } = useQuery<IMainProjectsHoverResponse>(
    GET_MAINPROJECTSHOVER,
    {
      variables: {
        skip: 0,
        take: 8,
        createdAt: "asc",
      },
    }
  );

  const projectData = useMemo(() => {
    if (!data) return { backgrounds: [], headlines: [], descriptions: [] };

    const backgrounds: string[] = [];
    const headlines: string[] = [];
    const descriptions: string[] = [];

    data.findManyMainProjects.forEach((project) => {
      if (project.background) {
        backgrounds.push(project.background);
      }

      const translation = project.translations.find(
        (t) => t.languageCode === locale
      );

      if (translation?.name) {
        headlines.push(translation.name);
      }

      if (translation?.description) {
        descriptions.push(translation.description);
      }
    });

    return { backgrounds, headlines, descriptions };
  }, [data, locale]);

  return {
    backgrounds: projectData.backgrounds,
    headlines: projectData.headlines,
    descriptions: projectData.descriptions,
    loading,
    error,
  };
};
