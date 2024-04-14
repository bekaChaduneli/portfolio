export interface CursorState {
  cursorType: string;
  isCursorActive: boolean;
  cursorAnimation: string | null;
  cursorBackground: string;
  cursorText: string;
}

export interface CursorActions {
  setIsCursorActive: (isActive: boolean) => void;
  setCursorAnimation: (animation: string | null) => void;
  setCursorBackground: (color: string) => void;
  setCursorText: (text: string) => void;
}
