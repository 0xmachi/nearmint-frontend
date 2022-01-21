import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const UpcomingFarmContainer = styled.div`
  background: #131530;
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 700px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1380px;
  width: 100%;
  padding: 0 70px;
  overflow: hidden;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0 70px;
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 30px;
  margin-top: 40px;
`;

export const CryptoCellContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px 25px;
`;

export const CryptoCell = styled.div`
  display: flex;
  border: 1.5px solid #e6e8ec;
`;

export const Image = styled.img`
  height: 220px;
  padding: 15px;
  filter: blur(10px);
  -webkit-filter: blur(10px);
`;

export const CryptoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const CryptoTitle = styled.p`
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const CryptoDesc = styled.p`
  color: white;
  margin: 0;
`;

export const CryptoDescBlur = styled.p`
  color: white;
  margin: 0;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const Button = styled(LinkR)`
  background: white;
  padding: 14px 24px;
  color: #010606;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772ff;
    color: #fcfcfd;
  }
`;

export const ButtonDisabled = styled(LinkR)`
  background: #3D3E55;
  padding: 14px 24px;
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  cursor: default;
  /* transition: all 0.2s ease-in-out; */
  text-decoration: none;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772ff;
    color: #fcfcfd;
  } */
`;