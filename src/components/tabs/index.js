import React, { useState } from 'react'
import Tab from './tab'

import {
  TabList
} from './styles'

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label)
  
  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

   return (
    <div onClick={() => console.log('BEEP')}>
      <TabList>
        {props.children.map((child) => {
          const { label } = child.props
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={handleTabClick}
            />
          )
        })}
      </TabList>
      <div style={{display: 'flex', flexDirection:'column'}}>
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return <div key={child.props.label}> {child.props.children} </div>
        })}
      </div>
    </div>
  )
}

export default Tabs