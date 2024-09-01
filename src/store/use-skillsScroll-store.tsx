import { create } from "zustand";

interface ScrollStore {
  isScrolling: boolean;
  setScrolling: (scrolling: boolean) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  isScrolling: true,
  setScrolling: (scrolling) => set({ isScrolling: scrolling }),
}));
