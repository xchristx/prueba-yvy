import React from 'react'
import NavBar from '../components/NavBar'
import { CssBaseline } from '@mui/material'
import MyAccordion from '../components/MyAccordion'
import MyBox from '../components/MyBox'


const AutodiagLayout = () => {
  return (<>
    <CssBaseline />
    <NavBar />
    <MyBox>
      <MyAccordion />
    </MyBox>

  </>)
}

export default AutodiagLayout