import styled from "styled-components";

export const FinishedFarmContainer = styled.div`
  background: #131530;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 700px;
  width: 100%;
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

export const FarmsTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px 50px 0px 0px;
  width: 90%;
`

export const FarmsTableHead = styled.div`
  display: flex;
  width: 96%;
  justify-content: space-between;
  background-color: white;
  padding-inline: 2%;
  padding-block: 20px;
`
export const HeadCol = styled.div`
  display: flex;
  width: ${props => props.width || "25%"};
  color: black;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: start;
`

export const Bond = styled.div`
  width: 96%;
  padding-inline: 2%;
  display: flex;
  height: 70px;
  border-bottom: 1.5px solid #E6E8EC;
`

export const BondColumn = styled.div`
  display: flex;
  width: ${props => props.width || "25%"};
  color: #EDF0EB;
  font-size: 14px;
  align-items: center;
  justify-content: start;
`