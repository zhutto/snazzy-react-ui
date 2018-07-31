import styled from "react-emotion";

export const Container = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled("div")`
  background-color: white;
  width: 400px;
  height: 400px;
`;
export const HeaderContainer = styled("div")`
  background-color: blue;
  display: flex;
  justify-content: start;
  padding: 10px;
`;
export const BodyContainer = styled("div")`
  display: flex;
  justify-content: start;
  padding: 10px;
`;
export const FooterContainer = styled("div")`
  background-color: blue;
  display: flex;
  justify-content: start;
  padding: 10px;
`;

// z-index: 5;
// background-color: rbga(1,1,1,0.5);
// width: 100px;
// height: 100px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
