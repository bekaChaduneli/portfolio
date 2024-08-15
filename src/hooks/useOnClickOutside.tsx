import { RefObject, useEffect, useCallback } from "react";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import pop from "@/sounds/pop-down.mp3";

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void
) {
  const { sound } = useSoundStore();
  const [popDown] = useSound(pop);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        sound && popDown();
        handler(event);
      }
    },
    [ref, handler]
  );

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        sound && popDown();
        handler(event);
      }
    },
    [handler]
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => handleClickOutside(event);
    const handleKey = (event: KeyboardEvent) => handleEscapeKey(event);

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  return handleClickOutside;
}

export default useOnClickOutside;
