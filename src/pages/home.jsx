import React from 'react'
import Banner from '../component/Banner'
import BlogPage from '../component/BlogPage'

const home = () => {
  return (
    <div>
      <Banner />

      <div className='max-w-7xl mx-auto'>
            <BlogPage />
        </div>
    </div>



    
  )
}

export default home
