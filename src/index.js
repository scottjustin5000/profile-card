import React from 'react'

import ProfileCard from './components'

export const ExampleComponent = (props) => {
  return <div style={{
    margin: '2em',
    padding: '0.5em',
    border: '2px solid #000',
    fontSize: '2em',
    textAlign: 'center'
  }}>
    <ProfileCard width={400} height={400}>

    </ProfileCard>
  </div>
}
