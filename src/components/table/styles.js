import styled from 'styled-components'

const TableBase = styled.table`
  table-layout: ${props => props.tableLayout || 'fixed'};
  border-collapse: collapse;
  border-spacing: unset;
  margin-bottom: ${props => props.mb || '16px'};
  max-width: ${props => props.maxWidth || 'unset'}
`
const TableRow = styled.tr`
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  cursor: ${props => props.cursor};
  :nth-child(even) {
    background-color: ${props =>  props.bgcolor || '#F6F7FA'};
  }
  ${props => props.hover ? `
  :hover {
    background-color: rgba(0, 104, 226, 0.2);
  }
  ` : ''};
  overflow-x: ${props => props.overflowX || ''};
`

const Th = styled.th`
  cursor: ${props => props.cursor || 'pointer'};
  padding: 4px;
  text-align: left;
  font-weight: 600;
  color: rgba(18, 35, 52, 0.5);
  background-color: #fff;
  white-space: nowrap;
  :last-child {
    width: 100%;
  }
  ${props => props.stick ? `
    position: absolute;
    top: auto;
    left: 0;
    width: 28px;
    height: 21px;
    white-space: unset;
    text-align: left;
    backface-visibility: hidden;
    background: #fff;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  ` : ''};
`

const Td = styled.td`
  padding: 4px;
  text-align: ${props => props.textAlign || 'left'};
  text-transform: ${props => props.textTransform || 'none'};
  font-weight: ${props => props.fontWeight || '400'};
  white-space: nowrap;
  color: 'rgba(18, 35, 52, 0.5)';
  :last-child {
    width: 100%;
  }

  ${props => props.stick ? `
    position: absolute;
    top: auto;
    left: 0;
    width: 28px;
    height: 26px;
    white-space: unset;
    text-align: left;
    backface-visibility: hidden;
    background: #fff;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  ` : ''};
`
export {
  TableBase,
  Th,
  Td,
  TableRow
}