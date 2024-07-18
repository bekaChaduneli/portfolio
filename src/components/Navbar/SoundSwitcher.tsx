import useSoundStore from "@/store/use-sound-store";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundSwitcher() {
    const { sound, setSound } = useSoundStore();
    return sound ? (
        <Volume2
            className="dark:text-secondary cursor-pointer text-primary w-[22px] h-[22px]"
            onClick={() => setSound(false)}
        />
    ) : (
        <VolumeX
            className="w-[22px] h-[22px] dark:text-secondary text-primary "
            onClick={() => setSound(true)}
        />
    );
}
