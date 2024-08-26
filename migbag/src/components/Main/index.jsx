import React from "react";
import { MobileView } from "../common/MobileView/MobileView";
import * as S from "./Style";
import AppLogo from "../common/Logo/AppLogo";

const Main = () => {
  console.log("hello");
  return (
    <MobileView>
      <AppLogo />
      <S.Slide>
        <S.SlideImg />
        <S.SlideText>의성마늘햄</S.SlideText>
        <S.SlideText>의성시와 계약해...</S.SlideText>
      </S.Slide>
      <S.ChallengeLayout>
        <S.ChallengeBox>
            
        </S.ChallengeBox>
      </S.ChallengeLayout>
    </MobileView>
  );
};

export default Main;
