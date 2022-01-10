import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const DetailContainer = styled.div`
  background: rgba(19, 21, 48, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin: 0 30px;
  }
`
export const DetailWrapper = styled.div`
  display: flex;
  max-width: 1151px;
  margin-top: 150px;
  margin-bottom: 114px;
  position: relative;
`

export const Img = styled.img`
  max-width: 1151px;

  @media screen and (max-width: 1300px) {
    max-width: 800px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const TextWrapper = styled.div`
  max-width: 680px;
  position: absolute;
  right: 100px;
  bottom: 120px;

  @media screen and (max-width: 1300px) {
    max-width: 520px;
    right: 30px;
    bottom: 80px;
  }

  @media screen and (max-width: 900px) {
    position: static;
    display: flex;
    flex-direction: column
  }
`;

export const Heading = styled.p`
  color: #FCFCFD;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 80px;
  margin-bottom: 30px;
  margin-top: 0;

  @media screen and (max-width: 1300px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 20px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(LinkR)`
  background: white;
  padding: 16px 28px;
  color: black;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 600;
  border: 1.5px solid #E6E8EC;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba( 0, 0, 0, 0);
    color: white;
  }
`