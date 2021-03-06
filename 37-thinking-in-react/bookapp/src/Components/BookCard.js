import React from 'react'

const BookCard = (props) => {

  const { img, title, author } = props.book

  return (
    <div className='bookcard'>

      <img src={img} alt='' />

      <div className='booktitle'>
        Book: {title}
      </div>

      <div className='booktitle'>
        Author: {author}
      </div>

      <button onClick={() => props.handleDeleteBook(props.book)}>
        ❌
      </button>

    </div>
  )
}

export default BookCard;
