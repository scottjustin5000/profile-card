import React from 'react'

import {
  TableBase,
  TableRow,
  Th,
  Td
}
from './styles'

const Table = (props) => {
 return <TableBase>
   <thead><TableRow>{(props.columns || []).map(c =><Th key={`col_${c}`}>{c}</Th>)}</TableRow></thead>
    <tbody>
      { (props.rows || []).map((r,ix) => {
        return (<TableRow key={`row_${ix}`}>
          { Object.values(r).map((v,i) => <Td key={`td_${ix}_${i}_${v}`}> {v} </Td>) } 
        </TableRow>)
      }) }
    </tbody>
  </TableBase>

}

export default Table

