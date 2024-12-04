import { months } from "@/lib/siteData";
import dayjs from "dayjs";
import "dayjs/locale/ka";

dayjs.locale("en");

export const formatDate = (date: string, language: string) => {
  const day = dayjs(date).date();
  const year = dayjs(date).year();

  if (language === "ka") {
    const month = months[dayjs(date).month()];
    return `${day} ${month} ${year}`;
  } else {
    return dayjs(date).format("DD MMM YYYY");
  }
};
