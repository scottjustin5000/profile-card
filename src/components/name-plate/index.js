import React from 'react'

import {
  PlateWrapper,
  NameWrapper,
  FirstName,
  LastName,
  DetailWrapper
} from './styles'

const NamePlate = (props) => {
const compressor = 1
const compressor2 = 1.2
const minFontSize = -1/0
const maxFontSize = 1/0
const fontSize =  Math.max(Math.min(props.width / (compressor*10), parseFloat(maxFontSize)), parseFloat(minFontSize))
const bottomLine = Math.max(Math.min(props.width / (compressor2*10), parseFloat(maxFontSize)), parseFloat(minFontSize))
  return (
   <PlateWrapper height={props.height}>
    <NameWrapper fontSize={fontSize}>
      <FirstName>
        {props.firstName}
      </FirstName> 
      <LastName>
        {props.lastName}
      </LastName>
    </NameWrapper>
    <DetailWrapper fontSize={bottomLine}> 
    #{props.number} {props.position}
    </DetailWrapper>
  </PlateWrapper>
  )
}

export default NamePlate