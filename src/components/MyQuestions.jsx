import React from 'react'
import Typography from '@mui/material/Typography';
import MyQuestion from './MyQuestion'

const MyQuestions = (props) => {
  return (<>
    <Typography variant="body2" color="text.secondary" align="center" >
      {props.title}
    </Typography>
    {
      props.questions.map((el,index) => (
        <MyQuestion key={index} id={index} value={el} />
      ))
    }
  </>)
}

export default MyQuestions