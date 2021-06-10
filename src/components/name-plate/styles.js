import styled from 'styled-components'

const PlateWrapper = styled.div`
  text-align: center;
  height: ${props => props.height}px;
`
const NameWrapper = styled.div`
  font-size: ${props => props.fontSize}px;
  margin-top: -15px;
  display: flex;
  width: 100%;
  justify-content: center;
`
const FirstName = styled.div`
  font-weight: 200;
`
const LastName = styled.div`
  font-weight: 600;
`

export {
  PlateWrapper,
  NameWrapper,
  FirstName,
  LastName
}