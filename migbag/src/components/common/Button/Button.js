import styled from "styled-components";

export const Button = styled.button`
    width: ${({ width }) => (width ? width : "356px")};
    height: ${({ height }) => (height ? height : "50px")};
    color: #FFFFFF;
    background-color: #FF8A36;
    border-radius: 10px;
`;