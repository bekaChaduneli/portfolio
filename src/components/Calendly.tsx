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
      className="p-2 rounded-[10%] bg-blue-500 text-white"
    />
  );
};

export default Calendly;
