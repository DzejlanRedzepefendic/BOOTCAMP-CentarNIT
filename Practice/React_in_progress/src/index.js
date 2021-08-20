import React from 'react'
import ReactDom from 'react-dom'

// const Greeting = () => {
//   return React.createElement('h1',{},'hello world');
// }

function BookList() {
  return (
    <section>
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
    <article>
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
const Author = () => <h4>Sun Tzu</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
