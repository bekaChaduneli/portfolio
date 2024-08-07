import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import light from "@/sounds/light.mp3";
import dark from "@/sounds/dark.mp3";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { sound } = useSoundStore();
  const [toDark] = useSound(light);
  const [toLight] = useSound(dark);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Sun
        className="w-[22px] h-[22px] text-secondary cursor-pointer"
        onClick={() => {
          setTheme("light");
          sound && toLight();
        }}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Moon
        className="text-primary w-[22px] h-[22px] cursor-pointer"
        onClick={() => {
          setTheme("dark");
          sound && toDark();
        }}
      />
    );
  }
}
