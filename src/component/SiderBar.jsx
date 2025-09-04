import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0, 15)))
    }, [])


  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            <div>
                {
                popularBlogs.slice(0,5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing px-2'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to={`/blogs/${blog.id}`} className='font-medium hover:text-brightColor inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>

                </div>)
                }
            </div>
        </div>



        <div>
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
            <div>
                {
                popularBlogs.slice(6,10).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing px-2'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to={`/blogs/${blog.id}`} className='font-medium hover:text-brightColor inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>

                </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar