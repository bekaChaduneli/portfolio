import useSoundStore from "@/store/use-sound-store";
import { Volume2, VolumeX } from "lucide-react";
import useSound from "use-sound";
import enable from "@/sounds/enable-sound.mp3";
import disable from "@/sounds/disable-sound.mp3";

export default function SoundSwitcher() {
  const { sound, setSound } = useSoundStore();
  const [play] = useSound(enable);
  const [turnOff] = useSound(disable);

  return sound ? (
    <Volume2
      className="dark:text-secondary cursor-pointer text-primary w-[22px] h-[22px]"
      onClick={() => {
        setSound(false);
        play();
      }}
    />
  ) : (
    <VolumeX
      className="w-[22px] h-[22px] dark:text-secondary text-primary "
      onClick={() => {
        setSound(true);
        turnOff();
      }}
    />
  );
}
