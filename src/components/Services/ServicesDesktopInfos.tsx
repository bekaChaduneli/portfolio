import { IServicesResponse } from "@/types/services";
import React, { Dispatch, SetStateAction } from "react";

export default function ServicesDesktopInfos({
  data,
  setCurrentService,
}: {
  data: IServicesResponse | undefined;
  setCurrentService: Dispatch<SetStateAction<number>>;
}) {
  return <div>ServicesDesktopInfos</div>;
}
