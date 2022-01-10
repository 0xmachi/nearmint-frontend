import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
  background: rgba(19, 21, 48, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 1450px) {
    transition: 0.8 all ease;
    justify-content: end;
  } */
`;

export const HeroWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1380px;
  justify-content: center;
  align-items: center;
  /* margin-top: 70px; */
  padding: 0 70px;

  /* @media screen and (min-width: 1400px) {
    transaction: 0.8 all ease;
    padding-left: 0px;
  } */
`;

export const HeroRow = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: minmax(2, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.p`
  color: #FCFCFD;
  font-size: 64px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 16px;
  margin-top: 0;
`;

export const SubTitle = styled.p`
  color: #777E90;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(LinkR)`
  background: rgba(0, 0, 0, 0);
  padding: 16px 28px;
  color: #FCFCFD;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  border: 1.5px solid #E6E8EC;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`

export const ImgWrap = styled.div`
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`