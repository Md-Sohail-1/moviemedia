import React from 'react'
const Container = (props) => {
  return (
    props.data.length >= 0 ? (
      <h1>{props.data.length}</h1>
    ) : (
      <h1>Hello</h1>
    )
  )
}

export default Container;