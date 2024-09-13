import React, { useState } from 'react';

const CommentForm = ({ postId, parentId = null, onSubmit }) => {
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ postId, parentId, content, isAnonymous });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded px-2 py-1"
        rows="3"
        placeholder="コメントを入力してください"
        required
      />
      <div className="flex items-center mt-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="mr-2"
          />
          匿名で投稿する
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-auto">
          コメントを送信
        </button>
      </div>
    </form>
  );
};

export default CommentForm;