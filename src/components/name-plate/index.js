import React from 'react'

import {
  PlateWrapper,
  NameWrapper,
  FirstName,
  LastName
} from './styles'
//image 50 % of height
//spacing 25 % of image height
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
    <div style={{fontSize:`${bottomLine}px`, display:'flex', justifyContent:'center', alignItems: 'center'}}> 
    #23 Short Stop
    </div>
      <div> 
        <img 
        style={{objectFit:'contain', width: '40%', position: 'absolute', top: '5px', right:'2px', opacity:'.4'}} 
        src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png' />
    </div>
  </PlateWrapper>
  )
}

export default NamePlate