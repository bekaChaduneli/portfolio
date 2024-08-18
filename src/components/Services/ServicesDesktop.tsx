import { IServicesResponse } from "@/types/services";
import React, { useState } from "react";
import ServicesDesktopImages from "./ServicesDesktopImages";
import ServicesDesktopInfos from "./ServicesDesktopInfos";

export default function ServicesDesktop({
  data,
}: {
  data: IServicesResponse | undefined;
}) {
  const [currentService, setcurrentService] = useState<number>(1);
  const services = data?.findManyServices;
  return (
    <div className="w-full flex justify-center relative">
      <div className="flex w-[954px] xl:w-[1200px] justify-between relative">
        <ServicesDesktopImages currentService={currentService} data={data} />
        <ServicesDesktopInfos
          setCurrentService={setcurrentService}
          data={data}
        />
      </div>
    </div>
  );
}
