import React from 'react'

const MyQuestion = (props) => {
  return (
    <div key={props.id}>{props.value}</div>
  )
}

export default MyQuestion