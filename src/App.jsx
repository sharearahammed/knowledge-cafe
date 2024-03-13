import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './components/Bookmarks/Bookmarks'


function App() {

const [bookmarks , setBookmarks] = useState([])

const [spentTimeOnRead , setSpentTimeOnRead] = useState(0);

const handleAddToBookmarks = blog =>{
  console.log('add book to bookmarks')
  console.log(blog)
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

const handleSpentTimeOnRead = (ID ,time) =>{
  console.log('mark as read',time)
  const newSpentTimeOnRead = spentTimeOnRead + time;
  setSpentTimeOnRead(newSpentTimeOnRead);

  // remove the read blog from bookmark
  // console.log('remove bookmark' , ID)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.ID !== ID);
  console.log(remainingBookmarks)
  setBookmarks(remainingBookmarks);
}

  return (
    <>
    <Header></Header>
    <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}
    handleSpentTimeOnRead={handleSpentTimeOnRead}></Blogs>
    <Bookmarks bookmarks={bookmarks}
    spentTimeOnRead={spentTimeOnRead}></Bookmarks>
    </main>
    </>
  )
}

export default App
