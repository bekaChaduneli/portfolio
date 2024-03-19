import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendly = () => {
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
      text="Talk With Me"
      className="py-[10px] rounded-[20px] px-[20px] dark:bg-[#ede7de]  bg-[#2b3b7a] dark:text-[#2b3b7a] text-[#ede7de]"
    />
  );
};

export default Calendly;
