import React from 'react'

import {
  TabListItem,
  TabListItemActive
} from './styles'

const Tab = (props) => {
   const getElement = () => {
    if (props.activeTab === props.label)  return TabListItemActive
    return TabListItem
   }

   const handleClick = (e) => {
     e.preventDefault()
     e.stopPropagation()
     props.onClick(props.label)
   }

   const Element = getElement()

   return (<Element onClick={handleClick}>
     { props.label }
     </Element>
     )
}

export default Tab
