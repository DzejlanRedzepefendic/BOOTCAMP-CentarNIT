import React from 'react'

const ErrorExample = () => {
  let title = 'Something blablabla'
  const handleClick = () => {
    title = 'hello there'
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        click me
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
