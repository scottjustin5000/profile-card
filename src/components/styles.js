import styled from 'styled-components'

const Polaroid = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  max-height:  ${props => props.height}px;
  margin: 2em;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: ${props => props.rotate};
`

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #efefef;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  overflow:auto;
`

// position: relative;
// z-index: 2;
const Picture = styled.img`
  width: 100%;
  max-height: ${props => props.height}px;
  object-fit: contain;
`

export {
  Card,
  Front,
  Back,
  Polaroid,
  Picture
}