import React from "react";
import {
  UpcomingFarmContainer,
  Wrapper,
  Header,
  CryptoCellContainer,
  CryptoCell,
  Image,
  CryptoDetails,
  CryptoDesc,
  CryptoTitle,
  ButtonWrapper,
  Button,
  CryptoDescBlur,
  ButtonDisabled
} from "./UpcomingFarmElements";
import CryptoImage from "../../images/cryptoImage.png";

const UpcomingFarm = () => {
  return (
    <>
      <UpcomingFarmContainer>
        <Wrapper>
          <Header>Upcoming Farms</Header>
          <CryptoCellContainer>
            <CryptoCell>
              <Image src={CryptoImage} alt="Crypto Image" />
              <CryptoDetails>
                <CryptoTitle>Multibridge</CryptoTitle>
                <CryptoDesc>
                  Multibridge will be developing a cross directional bridge
                  between Near, Polygon and Terra to transfer stablecoins (USDC,
                  USDT, UST) between chains. Future roadmap includes
                  bringing....Read More
                </CryptoDesc>
                <ButtonWrapper>
                  <Button to="#">Get Early Access ></Button>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
            <CryptoCell>
              <Image src={CryptoImage} alt="Crypto Image" />
              <CryptoDetails>
                <CryptoTitle>Media DAO</CryptoTitle>
                <CryptoDescBlur>
                  Multibridge will be developing a cross directional bridge
                  between Near, Polygon and Terra to transfer stablecoins (USDC,
                  USDT, UST) between chains. Future roadmap includes
                  bringing....Read More
                </CryptoDescBlur>
                <ButtonWrapper>
                <ButtonDisabled to="#">Coming soon</ButtonDisabled>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
            <CryptoCell>
              <Image src={CryptoImage} alt="Crypto Image" />
              <CryptoDetails>
                <CryptoTitle>Humanity Grants DAO</CryptoTitle>
                <CryptoDescBlur>
                  Multibridge will be developing a cross directional bridge
                  between Near, Polygon and Terra to transfer stablecoins (USDC,
                  USDT, UST) between chains. Future roadmap includes
                  bringing....Read More
                </CryptoDescBlur>
                <ButtonWrapper>
                <ButtonDisabled to="#">Coming soon</ButtonDisabled>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
            <CryptoCell>
              <Image src={CryptoImage} alt="Crypto Image" />
              <CryptoDetails>
                <CryptoTitle>M2 Finance</CryptoTitle>
                <CryptoDescBlur>
                  Multibridge will be developing a cross directional bridge
                  between Near, Polygon and Terra to transfer stablecoins (USDC,
                  USDT, UST) between chains. Future roadmap includes
                  bringing....Read More
                </CryptoDescBlur>
                <ButtonWrapper>
                  <ButtonDisabled to="#">Coming soon</ButtonDisabled>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
          </CryptoCellContainer>
        </Wrapper>
      </UpcomingFarmContainer>
    </>
  );
};

export default UpcomingFarm;
