"use client";
import { PopupButton } from "react-calendly";

const Calendly = () => {
  return (
    <PopupButton
      url="https://calendly.com/beka-chaduneli-1/30min"
      rootElement={window.document.body}
      text="Talk With Me"
      className="p-2 rounded-[10%] bg-blue-500 text-white"
    />
  );
};

export default Calendly;
