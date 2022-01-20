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
} from "./UpcomingFarmElements";
import CryptoImage from "../../images/cryptoImage.png";

const UpcomingFarm = () => {
  return (
    <>
      <UpcomingFarmContainer>
        <Wrapper>
          <Header>Upcoming Farm</Header>
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
                  <Button>Get Early Access ></Button>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
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
                  <Button>Get Early Access ></Button>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
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
                  <Button>Get Early Access ></Button>
                </ButtonWrapper>
              </CryptoDetails>
            </CryptoCell>
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
                  <Button>Get Early Access ></Button>
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
