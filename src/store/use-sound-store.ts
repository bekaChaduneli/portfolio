import { SoundActions, SoundState } from "@/types/storeTypes";
import { create } from "zustand";

const useSoundStore = create<SoundState & SoundActions>((set) => ({
  sound: true,
  setSound: (sound) => set({sound: sound}),
}));

export default useSoundStore;
