import styled from "styled-components";
import appLogo from "../../../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;

const HomeLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`;

const AppLogo = () => {
  return (
    <HomeLink to="/">
      <LogoImg src={appLogo} alt="app Logo" />
    </HomeLink>
  );
};

export default AppLogo;