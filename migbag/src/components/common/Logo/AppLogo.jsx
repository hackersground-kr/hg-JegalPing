import styled from "styled-components";
import appLogo from "../../../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  width: ${(props) => props.width || 'auto'};
  height: 80%;
`;

const HomeLink = styled(Link)`
  height: 20%;
  text-decoration: none;
`;

const AppLogo = ({ width }) => {
  return (
    <HomeLink to="/">
      <LogoImg src={appLogo} alt="app Logo" width={width} />
    </HomeLink>
  );
};

export default AppLogo;
