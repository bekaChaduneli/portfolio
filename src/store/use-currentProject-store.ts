import { CurrentProjectActions, CurrentProjectState } from "@/types/storeTypes";
import { create } from "zustand";

const useCurrentProjectStore = create<
  CurrentProjectState & CurrentProjectActions
>((set) => ({
  projectImage: "",
  projectDescription: "",
  projectHeadline: "",
  projectBackgroundColor: "",
  setCurrentProjectImage: (image) => set({ projectImage: image }),
  setCurrentProjectDescription: (description) =>
    set({ projectDescription: description }),
  setCurrentProjectHeadline: (headline) => set({ projectHeadline: headline }),
  setCurrentProjectText: (backgroundColor) =>
    set({ projectBackgroundColor: backgroundColor }),
  onCloseAnimation: () =>
    set({
      projectImage: "",
      projectDescription: "",
      projectHeadline: "",
      projectBackgroundColor: "",
    }),
}));

export default useCurrentProjectStore;
