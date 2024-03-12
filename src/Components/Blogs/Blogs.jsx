import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handelAddToBookmark}) => {
    const [blogs,setBlogs] = useState ([]);

    useEffect (() => {
        fetch ('blogs.json')
        .then (res => res.json ())
        .then (data => setBlogs (data))
    } ,[])

    return (
        <div className="md:w-2/3">
            <h3>Blogs {blogs.length}</h3>
            {
                blogs.map (blog =><Blog 
                key={blog.Id}
                blog={blog}
                handelAddToBookmark = {handelAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handelAddToBookmark: PropTypes.func
}

export default Blogs;