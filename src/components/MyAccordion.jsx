import * as React from 'react';
import { topics as MyData } from "../data/questions";
import MyAccordionElement from './MyAccordionElement';
import MyQuestions from './MyQuestions';

export default function MyAccordion() {
  return (
    <div>
      {
        MyData.map( (el, index)=> (
          <MyAccordionElement key={index} id={index} title={el.title}>
            <MyQuestions title={'Indicadores Mímimos'} questions={el.IMinimos}></MyQuestions>                  
            <MyQuestions title={'Indicadores Deseables'} questions={el.IMinimos}></MyQuestions>                  
          </MyAccordionElement>
        ))
      }
   </div>
  );
}