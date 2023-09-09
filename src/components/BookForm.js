import React, { useState } from 'react';
import { v4 } from 'uuid';


const BookForm = () => {


    const [books, setBooks] = useState([
        { title: 'کوری', author: 'ساراماگو', id: 1 },
        { title: 'صد سال تنهایی ', author: 'مکارم ', id: 2 }
    ]);

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const addBook = (e) => {
        if (books.some(book=> book.title === title && book.author === author)) {
            alert('کتاب تکراری')
        } else {
            setBooks([...books, { title: title, author: author, id: v4() }])

        }

        e.preventDefault();
        setTitle('');
        setAuthor('');
    }

    const removeBook = (x) => {
        setBooks(books.filter((book) => book.id !== x))
    }

    return (

        <div className='bookForm' >

            <h1>
                فهـرست کتـاب‌های مـن
            </h1>
            <h2>
                شما&nbsp;{books.length} کتاب در کتابخانه دارید.
            </h2>


            <div className='theDiv'>
                {
                    books.map(book => <div onClick={() => removeBook(book.id)} className='theBooks' key={book.id} >
                        <li className='firstLi'>{book.title}</li><li className='secondLi'>{book.author}</li></div>)
                }
            </div>


            < form className='theForm' onSubmit={addBook}>
                <ul className='ulStyle'>
                    <li><input type='text' placeholder='عنوان کتاب' className='theForms' required value={title}
                        onChange={(e) => setTitle(e.target.value)} /></li>
                    <li><input type='text' placeholder='مؤلف' className='theForms' required value={author}
                        onChange={(e) => setAuthor(e.target.value)} /></li>
                    <li ><input type='submit' value='ثبت کتاب' className='theSubmitButton' /></li>
                </ul>
            </form >

        </div>
    );
}

export default BookForm;