import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  font-family: verdana;
  font-size: 0.5em;
`
const Summary = styled.span`
  font-size: .75em;
  padding: 8px;
`

const DetailBlock = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
`
const ColumnWrapper = styled.div`
  display: flex;
  margin-top: 2px;
  margin-bottom: 2px;
  box-sizing: border-box;
`

const Key = styled.label`
  display: fles;
  margin: 0px;
  font-size: 12px;
  font-weight: bold;
  flex: 1 1 0%;
`
const Value = styled.label`
  display: flex;
  margin: 0px;
  font-size: 12px;
  flex: 2 1 0%;
`

export {
  DetailBlock,
  Container,
  Summary,
  ColumnWrapper,
  Key,
  Value
}

