import React, { useState } from 'react'

const UseStateBasics = () => {
  const titles = ['Novi', 'Sam text', 'hello', 'random', 'thing']
  const [text, setText] = useState('random title')
  const handleClick = () => {
    let randomTitle = titles[Math.floor(Math.random() * titles.length)]
    setText(randomTitle)
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
