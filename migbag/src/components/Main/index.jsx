import React from "react";
import { MobileView } from "../common/MobileView/MobileView";
import * as S from "./Style";
import AppLogo from "../common/Logo/AppLogo";

const Main = () => {
  console.log("hello");
  return (
    <MobileView>
      <AppLogo />
    </MobileView>
  );
};

export default Main;
