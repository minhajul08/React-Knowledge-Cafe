import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState ([]);
  const [readingTime,setReadingTime] = useState (0)

  const handelAddToBookmark = blog => {
    const newBookmark =[...bookmarks,blog];
    setBookmarks (newBookmark);
  }

 const handleMarkAsRead = (Id,time) => {
  const newReadingTime = readingTime + time;
  setReadingTime (newReadingTime)

  // remove bookmark
  const remainingBookmarks =bookmarks.filter (bookmark => bookmark.Id !== Id);
  setBookmarks (remainingBookmarks);
 }

 return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handelAddToBookmark={handelAddToBookmark}
     handleMarkAsRead ={handleMarkAsRead}
     ></Blogs>
     <Bookmarks bookmarks ={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
