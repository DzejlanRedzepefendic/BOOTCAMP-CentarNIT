import React from 'react'
import ReactDom from 'react-dom'

// const Greeting = () => {
//   return React.createElement('h1',{},'hello world');
// }
import './index.css'
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/41yO95t41bL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    alt=''
  />
)
const Title = () => <h1>The Art of War</h1>
const Author = () => (
  <h4 style={{ color: '#617d98', foontSize: '0.75rem', marginTop: '0.5rem' }}>
    Sun Tzu
  </h4>
)

ReactDom.render(<BookList />, document.getElementById('root'))
