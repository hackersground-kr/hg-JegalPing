import React from "react";
import { MobileView } from "../common/MobileView/MobileView";
import * as S from "./Style";
import AppLogo from "../common/Logo/AppLogo";
import styled from "styled-components";

const Main = () => {
  return (
    <S.Container>
      <MobileView>
        <AppLogo width="80px" />
        <S.Slide>
          <S.SlideImg />
          <div>
            <S.SlideText>의성마늘햄</S.SlideText>
            <S.SlideText>의성시와 계약해...</S.SlideText>
          </div>
        </S.Slide>
        <S.MinbagLayout>
          <S.MinbagMap>의성군</S.MinbagMap>
          <S.MinbagBox />
          <S.MinbagBox />
          <S.MinbagBox />
        </S.MinbagLayout>
      </MobileView>
    </S.Container>
  );
};

export default Main;
