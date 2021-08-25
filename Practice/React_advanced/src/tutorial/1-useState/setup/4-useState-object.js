import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  const changeMessage = () => {
    setPerson({ name: 'Goran', age: 25, message: 'Nothing to loss' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Click me
      </button>
    </>
  )
}

export default UseStateObject
