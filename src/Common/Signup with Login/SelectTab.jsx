import React from 'react'
import styled from 'styled-components'

const SelectTabWidth= styled.div`
    width : 100%;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
    padding : 20px;
    border : 1px solid #C4C4C4;
    border-bottom : 0px;
    border-radius : ${(props) => props.theme.radiusLg} ${(props) => props.theme.radiusLg} 0 0;
`

export default function SelectTab(props) {
  // const {bgcolor, setBgcolor} = useState(`${(props) => props.theme.gray}`);
  return (
    <SelectTabWidth >{props.text}</SelectTabWidth>
  )
}