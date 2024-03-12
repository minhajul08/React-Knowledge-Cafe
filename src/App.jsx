import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState ([]);

  const handelAddToBookmark = blog => {
    const newBookmark =[...bookmarks,blog];
    setBookmarks (newBookmark);
  }
 return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
     <Bookmarks bookmarks ={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
