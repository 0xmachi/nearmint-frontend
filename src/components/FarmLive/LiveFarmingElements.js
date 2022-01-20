import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import BackgroundImage from '../../images/BoxBackground.svg'

export const LiveFarmContainer = styled.div`
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

export const ProjectSection = styled.div`
  display: flex;
  width: 100%;
  border: 1.5px solid white;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 440px;
  padding: 25px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: center;
  margin-right: 48px;
  margin-left: 23px;
  margin-top: 50px;
`;

export const DetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

export const Name = styled.p`
  color: white;
  font-size: 30px;
  padding: 0;
  margin: 0;
`;

export const Button = styled(LinkR)`
  background: white;
  padding: 16px 28px;
  color: #010606;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772ff;
    color: #fcfcfd;
  }
`;

export const DetailBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Box = styled.div`
  border: 1.5px solid rgba(230, 232, 236, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 42%;
  margin: 5px;
  background-image: url(${ BackgroundImage });
  background-repeat: no-repeat;
  background-position: center;
`;

export const BoxHeader = styled.p`
  margin: 0;
  padding: 60px 20px 35px 20px;
  color: white;
  font-size: 25px;
`;

export const BoxDesc = styled.p`
  margin: 0;
  padding: 35px 20px 60px 20px;
  color: white;
  font-size: 35px;
  font-weight: 700;
`;
