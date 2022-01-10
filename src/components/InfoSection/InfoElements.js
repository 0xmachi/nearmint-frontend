import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #10122b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1380px;
  justify-content: center;
  align-items: center;
  margin-top: 86px;
  padding: 0 70px;

  /* @media screen and (min-width: 1280px) {
    transaction: 0.8 all ease;
    padding-left: 0px;
  } */
`;

export const HeroRow = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: minmax(2, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.p`
  color: #fcfcfd;
  font-size: 64px;
  line-height: 84px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 16px;
  margin-top: 0;
`;

export const SubTitle = styled.p`
  color: #FFFFFF;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 24px;
  padding-left: 24px;
  margin: 36px 0 12px 0;
`;

export const Description = styled.p`
  color: #777e90;
  margin-bottom: 35px;
  font-size: 17px;
  line-height: 24px;
  padding-left: 32px;
  margin: 0;
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const ImgWrap = styled.div`
  max-width: 420px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Button = styled(LinkR)`
  background: #3772ff;
  padding: 16px 28px;
  color: #fcfcfd;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;

export const SubRow = styled.div``;
