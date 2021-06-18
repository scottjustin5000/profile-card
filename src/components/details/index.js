import React, {Fragment} from 'react'

import {
  DetailBlock,
  Container,
  Summary,
  ColumnWrapper,
  Key,
  Value
} from './styles'

const Details = React.forwardRef((props, ref) => {

  const buildCol = (kvp) => {
    if(!kvp || !Object.keys(kvp).length) return <><Key></Key> <Value></Value></>
    return (<><Key>{kvp.key}:</Key> <Value>{kvp.value}</Value></>)
  }

  const buildDoubleColumn = () => {
    const rows = []
    for(let i = 0; i < props.details.length; i+=2) {
      rows.push(<ColumnWrapper key={`cw_${i}`}> { buildCol(props.details[i]) }{ buildCol(props.details[i+1]) }</ColumnWrapper>)
    }
    return rows
  }

  const buildRows = () => {
    if(props.size !== 'small') return buildDoubleColumn()

    const rows = []
    for(let i = 0; i < props.details.length; i++) {
      rows.push(<ColumnWrapper key={`cw_${i}`}> { buildCol(props.details[i]) }</ColumnWrapper>)
    }
    return rows
  }


  return (<Container ref={ref}>
    <Summary> 
      {props.summary}
    </Summary> 
    <DetailBlock>
    {buildRows().map((R) => {
      return R
    })} 
    </DetailBlock>
  </Container>)
})

export default Details