import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function SoundSwitcher() {
  const [audio, setAudio] = useState<boolean>(true);

  return audio ? (
    <Volume2
      className="dark:text-[#ede7de] cursor-pointer text-[#2b3b7a] w-[22px] h-[22px]"
      onClick={() => setAudio(false)}
    />
  ) : (
    <VolumeX
      className="w-[22px] h-[22px] dark:text-[#ede7de] text-[#2b3b7a] "
      onClick={() => setAudio(true)}
    />
  );
}
