import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: rgba(19, 21, 48, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 760px) {
    justify-content: space-evenly;
  }
`

export const IconWrap = styled.a`
  text-decoration: none;
  margin: 100px 125px 60px 125px;
  
  @media screen and (max-width: 760px) {
    margin: 100px 0 60px 0px;
  }
`

export const Icon = styled.img`
  height: 32px;
`