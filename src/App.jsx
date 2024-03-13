import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './components/Bookmarks/Bookmarks'


function App() {
// const [bookmarks, setbookmarks] = useState([]);

// const handleAddToBookmarks = blog =>{
//   const newBookmarks = [...bookmarks , blog];
//   setbookmarks(newBookmarks)
// }
const [bookmarks , setBookmarks] = useState([])

const handleAddToBookmarks = blog =>{
  console.log('add book to bookmarks')
  console.log(blog)
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

  return (
    <>
    <Header></Header>
    <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </main>
    </>
  )
}

export default App
