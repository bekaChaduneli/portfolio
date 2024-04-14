import { CursorActions, CursorState } from "@/types/storeTypes";
import { create } from "zustand";

const useCursorStore = create<CursorState & CursorActions>((set) => ({
  cursorType: "",
  isCursorActive: false,
  cursorAnimation: null,
  cursorBackground: "#ffffff",
  cursorText: "",
  setIsCursorActive: (isActive) => set({ isCursorActive: isActive }),
  setCursorAnimation: (animation) => set({ cursorAnimation: animation }),
  setCursorBackground: (color) => set({ cursorBackground: color }),
  setCursorText: (text) => set({ cursorText: text }),
}));

export default useCursorStore;
