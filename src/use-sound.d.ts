declare module "use-sound" {
  import { Howl, Howler } from "howler";

  type PlayFunction = (options?: {
    id?: string;
    playbackRate?: number;
  }) => void;
  type ReturnedValue = [PlayFunction, { stop: () => void; sound: Howl | null }];

  function useSound(src: string | string[], options?: {}): ReturnedValue;

  export default useSound;
}
