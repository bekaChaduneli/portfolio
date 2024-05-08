import useSoundStore from "@/store/use-sound-store";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundSwitcher() {
  const { sound, setSound } = useSoundStore();
  return sound ? (
    <Volume2
      className="dark:text-[#ede7de] cursor-pointer text-[#2b3b7a] w-[22px] h-[22px]"
      onClick={() => setSound(false)}
    />
  ) : (
    <VolumeX
      className="w-[22px] h-[22px] dark:text-[#ede7de] text-[#2b3b7a] "
      onClick={() => setSound(true)}
    />
  );
}
