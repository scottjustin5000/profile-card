import React, { useState, useEffect, useRef } from 'react'
import NamePlate from './name-plate'
import Tabs from './tabs'
import Table from './table'
import Details from './details'

import {
  Front,
  Card,
  Back,
  Polaroid,
  Picture
} from './styles'

const stats = {
  columns: ['S', 'T', 'GP', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows: [{
    s: 2020,
    t: 'SD',
    gp: 180,
    ab: 223,
    r: 123,
    h: 444,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    s: 2021,
    t: 'SD',
    gp: 180,
    ab: 223,
    r: 123,
    h: 444,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const splits = {
  columns: ['SPLT','AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows:[{
    splt: 'vs Left',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'vs Right',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Home',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Away',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 0-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 1-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  },{
    splt: 'Cnt 2-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 2-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 2-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-0',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    splt: 'Cnt 3-2',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const gameLogs = {
  columns: ['SUM','AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS'],
  rows:[{
    sum: '06/03/2021, NYM 3 @ SD 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '06/01/2021, SD 3 @ CHC 4',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/31/2021, SD 2 @ CHC 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/30/2021, SD 4 @ HOU 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/29/2021, SD 11 @ HOU 8',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/28/2021, SD 10 @ HOU 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/27/2021, SD 5 @ MIL 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/26/2021, SD 2 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/25/2021, SD 7 @ MIL 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/24/2021, SD 3 @ MIL 5',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  },{
    sum: '05/23/2021, SEA 2 @ SD 9',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/22/2021, SEA 4 @ SD 6',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/21/2021, SEA 1 @ SD 16',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/19/2021, COL 0 @ SD 3',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/09/2021, SD 11 @ SF 1',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }, {
    sum: '05/08/2021, SD 1 @ SF 7',
    ab: 878,
    r: 1,
    h: 8,
    '2b': 33,
    '3b': 55,
    hr: 55,
    rbi:234,
    bb: 23,
    hbp: 3,
    so: 23,
    sb: 22,
    cs: 5,
    avg: .333,
    obp: .200,
    slg: .254,
    ops: .321
  }]
}

const kvp = [{
  key: 'height',
  value: 6
}, {
  key: 'weight',
  value: 6
}, {
  key: 'position',
  value: 'ss'
}, {
  key: 'number',
  value: 23
},{
  key: 'dob',
  value: '01/17/1993'
}, {
  key: 'hits',
  value: 'L'
}, {
  key: 'throws',
  value: 'R'
}]
const ProfileCard = (props) => {
  
 const [flip, setFlip] = useState(false)
 const namePlateRef = useRef()
 const detailRef = useRef()
 const [maxHeight, setMaxHeight] = useState()

 useEffect(() => {
   if(detailRef.current && namePlateRef.current) {
     setMaxHeight(400 - detailRef.current.clientHeight - namePlateRef.current.clientHeight -32 - 20)
   }
 })

  const handleClick = () => {
    console.log('FOOOOOOO')
    setFlip(!flip)
  }
//image 50 % of height
//spacing 25 % of image height
  return (
  <Polaroid width={props.width} height={props.height}>
    <Card rotate={flip ? 'rotateY(180deg)' : undefined} onClick={handleClick}>
      <Front>
<Picture 
maxHeight={props.height * .80}
src='https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35983.png' />
<NamePlate width={props.width} height={(props.height * .80) * .30} firstName='Fernando' lastName='Tatis Jr.' />
</Front>
<Back>
  <div style={{display: 'flex', flexDirection: 'column'}}> 
  <div style={{paddingLeft:'2px', paddingRight:'2px'}}>
    <div ref={namePlateRef} style={{display: 'flex', justifyContent: 'center'}}> F. Tatis Jr</div> 
    </div> 
    <div ref={detailRef} style={{fontFamily:'verdana', fontSize:'0.5em'}}>
     <Details details={kvp} />
     </div>
  </div>
  <div style={{fontFamily:'verdana', fontSize:'0.4em', transform: 'translate3d(0,0,0)'}}>
  <Tabs>
        <div label='Stats'>
          <div style={{backgroundColor: '#ffffff', overflow:'auto',  maxHeight: `${maxHeight}px`, fontSize:'10px'}}>
          <Table stick columns={stats.columns} rows={stats.rows} />
          </div>
        </div>
        <div label='Splits'>
        <div style={{ backgroundColor: '#ffffff', fontSize:'10px', overflow:'auto', maxHeight: `${maxHeight}px`}}>
          <Table stick columns={splits.columns} rows={splits.rows} />
          </div>
        </div>
        <div label='Game Logs'>
        <div style={{backgroundColor: '#ffffff', overflow:'auto', fontSize:'10px',  maxHeight: `${maxHeight}px`}}>
          <Table stick columns={gameLogs.columns} rows={gameLogs.rows} />
          </div>
        </div>
      </Tabs>
   
  </div>

</Back>
</Card>
  </Polaroid>)
}

export default ProfileCard