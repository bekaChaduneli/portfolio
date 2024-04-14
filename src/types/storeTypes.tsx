export interface StoreState {
  cursorType: string;
  isCursorActive: boolean;
  cursorAnimation: string | null;
  cursorBackground: string;
  cursorText: string;
}

export interface StoreActions {
  setIsCursorActive: (isActive: boolean) => void;
  setCursorAnimation: (animation: string | null) => void;
  setCursorBackground: (color: string) => void;
  setCursorText: (text: string) => void;
}
