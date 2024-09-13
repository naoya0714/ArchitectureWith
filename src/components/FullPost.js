import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const FullPost = ({ post }) => {
  return (
    <div className="full-post">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        投稿者: {post.author} | 日付: {post.date}
      </div>
      <div className="post-content mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentList comments={post.comments} />
      <CommentForm postId={post.id} />
    </div>
  );
};

export default FullPost;