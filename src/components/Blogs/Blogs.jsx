import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks,handleSpentTimeOnRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
               blogs.map((blog,idx) => <Blog 
                key={idx} 
                blog={blog}
                handleAddToBookmarks={handleAddToBookmarks}
                handleSpentTimeOnRead={handleSpentTimeOnRead}></Blog>) 
            }
        </div>
    );
};
Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleSpentTimeOnRead: PropTypes.func.isRequired
}

export default Blogs;