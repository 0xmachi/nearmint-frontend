import React from 'react'
import BackImg from '../../images/backImage.png'

import {
  DetailContainer,
  Img
} from "./DetailElements"

const DetailSection = () => {
  return (
    <DetailContainer>
      <Img src={BackImg} alt="Background Image"></Img>   
    </DetailContainer>
  )
}

export default DetailSection
