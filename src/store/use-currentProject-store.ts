import { CurrentProjectActions, CurrentProjectState } from "@/types/storeTypes";
import { create } from "zustand";

const useCurrentProjectStore = create<
  CurrentProjectState & CurrentProjectActions
>((set) => ({
  currentProject: null,
  setCurrentProject: (index) => set({ currentProject: index }),
  onCloseAnimation: () =>
    set({
      currentProject: null,
    }),
}));

export default useCurrentProjectStore;
