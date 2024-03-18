import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function SoundSwitcher() {
  const [audio, setAudio] = useState(true);

  return audio ? (
    <Volume2
      className="dark:text-[#ede7de] text-[#556f66] w-[22px] h-[22px]"
      onClick={() => setAudio(false)}
    />
  ) : (
    <VolumeX
      className="w-[22px] h-[22px] dark:text-[#ede7de] text-[#556f66]"
      onClick={() => setAudio(true)}
    />
  );
}
