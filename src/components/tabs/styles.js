import styled from 'styled-components'

const TabWrapper = styled.div`

`

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`

const TabListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding-left: 0.75rem;
  padding-right: 0.75em;
  padding-bottom: 0.50rem;
`
const TabListItemActive = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding-left: 0.75rem;
  padding-right: 0.75em;
  padding-bottom: 0.50rem;
  color: #ff0000;
`


export {
  TabListItem,
  TabListItemActive,
  TabWrapper,
  TabList
}

