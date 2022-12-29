import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyAccordionElement = (props) => {
  return (<>
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${props.id}a-header`}
          id={`panel${props.id}a-header`}
        >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
          {props.children}
      </AccordionDetails>
      </Accordion>
  </>)
}

export default MyAccordionElement