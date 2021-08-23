import React from 'react'
import ReactDom from 'react-dom'

// css
import './index.css'
// var
const books = [
  {
    id: 110,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41yO95t41bL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'The Art of War',
    author: 'Sun Tzu',
  },
  {
    id: 111,
    img: 'https://www.delfi.rs/_img/artikli/2021/07/kovid_19_vv.jpg',
    title: 'Covid 19+',
    author: 'Marko Vidojković',
  },
  {
    id: 112,
    img: 'https://www.delfi.rs/_img/artikli/2019/08/the_little_prince_vv.jpg',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery',
  },
]
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
