import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで投稿をサーバーに送信する処理を実装
    console.log({ title, content, category });
  };

  return (
    <div className="create-post">
      <h2 className="text-2xl font-bold mb-4">新規投稿</h2>
      {isPreview ? (
        <div className="preview">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{content}</p>
          <button onClick={() => setIsPreview(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
            編集に戻る
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">タイトル</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block mb-1">内容</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded px-2 py-1"
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="category" className="block mb-1">カテゴリー</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            >
              <option value="">選択してください</option>
              <option value="general">一般</option>
              <option value="tech">技術</option>
              <option value="lifestyle">ライフスタイル</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              投稿
            </button>
            <button type="button" onClick={() => setIsPreview(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
              プレビュー
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreatePost;