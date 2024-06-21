import React, { useState } from 'react';
import './blog.css';
import BinaryBackground from '../Home/BinaryBackground';

interface BlogProps {
}

const Blog: React.FC<BlogProps> = () => {

  return (
    <div className="blog-body">
      <BinaryBackground />
      <div className=''>

      </div>
    </div>
  );
};

export default Blog;