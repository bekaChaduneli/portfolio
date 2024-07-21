import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import pop from "@/sounds/pop-up.mp3";

const Calendly = () => {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations("Navbar");
  const { sound } = useSoundStore();
  const [popUp] = useSound(pop);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className=""></div>;
  }

  return (
    <div
      onClick={() => {
        sound && popUp();
      }}
      className=""
    >
      <PopupButton
        url="https://calendly.com/beka-chaduneli-1/30min"
        rootElement={document.body}
        text={t("talk")}
        className="py-[10px] rounded-[20px] px-[20px] dark:bg-secondary bg-primary dark:text-primary transition duration-150 font-medium brightness-100 text-[#ffffff] hover:brightness-[120%] "
      />
    </div>
  );
};

export default Calendly;
