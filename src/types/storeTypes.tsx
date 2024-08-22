export interface CursorState {
  cursorType: string;
  isCursorActive: boolean;
  cursorAnimation: string | null;
  cursorBackground: string;
  cursorText: string;
}

type PopUpType = "books" | "profile" | "linkedin" | "github";

export interface PopUpState {
  type: PopUpType | null;
  isOpen: boolean;
}

export interface CurrentProjectState {
  projectImage: string;
  projectDescription: string;
  projectHeadline: string;
  projectBackgroundColor: string;
}

export interface CurrentProjectActions {
  setCurrentProjectImage: (image: string) => void;
  setCurrentProjectDescription: (description: string) => void;
  setCurrentProjectHeadline: (headline: string) => void;
  setCurrentProjectText: (backgroundColor: string) => void;
  onCloseAnimation: () => void;
}

export interface PopUpActions {
  onOpen: (type: PopUpType) => void;
  onClose: () => void;
}

export interface CursorActions {
  setIsCursorActive: (isActive: boolean) => void;
  setCursorAnimation: (animation: string | null) => void;
  setCursorBackground: (color: string) => void;
  setCursorText: (text: string) => void;
  setCursorType: (text: string) => void;
  onCloseAnimation: () => void;
}

export interface SoundState {
  sound: boolean;
}

export interface SoundActions {
  setSound: (sound: boolean) => void;
}
