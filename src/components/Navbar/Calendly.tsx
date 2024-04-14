import { TFunction } from "i18next";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendly = ({ t }: { t: TFunction }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className=""></div>;
  }

  return (
    <PopupButton
      url="https://calendly.com/beka-chaduneli-1/30min"
      rootElement={document.body}
      text={t("talk")}
      className="py-[10px] rounded-[20px] px-[20px] dark:bg-[#ede7de]  bg-[#2b3b7a] dark:text-[#2b3b7a] transition duration-150 font-medium brightness-100 text-[#ffffff] hover:brightness-[120%] "
    />
  );
};

export default Calendly;
