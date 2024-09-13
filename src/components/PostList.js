import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, postsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="post-list">
      {currentPosts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      <div className="pagination flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;