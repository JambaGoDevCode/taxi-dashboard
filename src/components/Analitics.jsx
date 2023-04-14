import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyle';

/* Icons */
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";



export default function Analitics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this moth</h5>
          <h2>$768.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill/>
        </div>
      </div>
      <div className="analytic">
        <div className="logo"></div>
        <div className="content"></div>
      </div>
    </Section>
  )
}


const Section = styled.nav` 

`;