import create from "zustand";

interface StoreState {
  cursorType: string;
  isCursorActive: boolean;
  cursorAnimation: string | null;
  cursorBackground: string;
  cursorText: string;
}

interface StoreActions {
  setIsCursorActive: (isActive: boolean) => void;
  setCursorAnimation: (animation: string | null) => void;
  setCursorBackground: (color: string) => void;
  setCursorText: (text: string) => void;
}

const useCursorStore = create<StoreState & StoreActions>((set) => ({
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
