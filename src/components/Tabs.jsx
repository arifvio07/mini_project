import React from 'react'
import {Nav , NavItem, NavLink} from 'reactstrap'
export default function Tabs({tab,setTab}) {
  return (
    <Nav className='mb-3' pills>
  <NavItem>
    <NavLink active ={tab === 0? true :false} onClick={() => setTab(0)}>
      BBQ
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink active ={tab === 1? true : false} onClick={() => setTab(1)}>
      Burger
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled>
      Bread
    </NavLink>
  </NavItem>
</Nav>
  )
}
