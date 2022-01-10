import styled from "styled-components";

export const SupportContainer = styled.div`
  background: rgba(19, 21, 48, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
`;

export const Heading = styled.p`
  font-size: 40px;
  color: white;
  margin-bottom: 30px;
`;

export const SponserImg = styled.img`
  max-width: 160px;
  margin-bottom: 50px;
`;

export const DecorationImg = styled.img`
  width: 100vw;

  @media screen and (max-width: 1000px) {
    width: 1000px;
  }

  @media screen and (min-width: 1460px) {
    width: 1380px;
  }
`;

export const DecorationContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
`;
