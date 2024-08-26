import styled from "styled-components";
import ham from "../../assets/img/ham.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Slide = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  border-radius: 20px;
  gap: 30px;
`;
export const SlideImg = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${ham});
`;

export const SlideText = styled.p``;

export const MinbagLayout = styled.div`
  width: 100%;
  max-width: 355px;

  height: 100%;
  max-height: 500px;
  display: flex; // flex 컨테이너로 설정
  flex-direction: column; // 세로 방향으로 배치
  align-items: center; // 중앙 정렬
  gap: 20px; // 요소 간 간격 설정
`;
export const MinbagMap = styled.p``;
export const MinbagBox = styled.div`
  width: 100%;
  max-width: 355px;

  height: 120px;

  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
