import React, { useState, useEffect, useRef } from 'react'
import WebFont from 'webfontloader';
import NamePlate from './name-plate'
import Tabs from './tabs'
import Table from './table'
import Details from './details'

import {
  Front,
  Card,
  Back,
  Polaroid,
  Picture,
  StatPanel,
  TabWrapper,
  BackHeader,
  Name,
  TeamLogo
} from './styles'


const ProfileCard = (props) => {
  
 const [flip, setFlip] = useState(false)
 const [height, setHeight] = useState(0)
 const [width, setWidth] = useState(0)
 const namePlateRef = useRef()
 const detailRef = useRef()
 const [maxHeight, setMaxHeight] = useState()

 useEffect(() => {
    const size = props.size === 'small' ? 200 : 400
    setHeight(size)
    setWidth(size)
  },[props.size])

 useEffect(() => {
   if(detailRef.current && namePlateRef.current) {
     setMaxHeight(height - detailRef.current.clientHeight - namePlateRef.current.clientHeight -32 - 20)
   }
 })

 useEffect(() => {
  WebFont.load({
    google: {
      families: ['Shadows Into Light']
    }
  })
 }, [])

  const handleClick = () => {
    setFlip(!flip)
  }
  const abbreviateFirstName  = (firstName) => {
    if(!firstName) return ''
    return `${firstName[0]}.`
  }
 const { player, tabData } = { ...props } 
  return (
    <Polaroid width={width} height={height}>
      <Card rotate={flip ? 'rotateY(180deg)' : undefined} onClick={handleClick}>
        <Front>
          <Picture 
            maxHeight={height * .80}
            src={player.headShot} />
          <NamePlate 
            width={width} 
            height={(height * .80) * .30} 
            firstName={player.firstName} 
            lastName={player.lastName} 
            number={player.number} 
            position={player.position} />
          <TeamLogo src={player.teamLogo}/>
        </Front>
        <Back>
          <BackHeader> 
            <Name ref={namePlateRef}>
              {abbreviateFirstName(player.firstName)} {player.lastName}
            </Name> 
            <Details 
              ref={detailRef} 
              size={props.size} 
              summary={player.summary}
              details={player.details} />
          </BackHeader>
          <TabWrapper>
            <Tabs>
              { tabData.map(t => {
                  return (
                          <div key={t.label} label={t.label}>
                            <StatPanel maxHeight={maxHeight}>
                              <Table columns={t.data.columns} rows={t.data.rows} />
                            </StatPanel>
                          </div>
                         )
                  }) 
              }
            </Tabs>
          </TabWrapper>
        </Back>
      </Card>
    </Polaroid>
  )
}

export default ProfileCard