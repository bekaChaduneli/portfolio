export interface CursorState {
    cursorType: string;
    isCursorActive: boolean;
    cursorAnimation: string | null;
    cursorBackground: string;
    cursorText: string;
}

type PopUpType = "books" | "aboutMe" | "linkedin" | "github";

export interface PopUpState {
    type: PopUpType | null;
    isOpen: boolean;
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
}

export interface SoundState {
    sound: boolean;
}

export interface SoundActions {
    setSound: (sound: boolean) => void;
}
