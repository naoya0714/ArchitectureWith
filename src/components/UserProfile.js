import React, { useState } from 'react';

const UserProfile = ({ user, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, email, bio });
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2 className="text-2xl font-bold mb-4">ユーザープロフィール</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">名前</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="bio" className="block mb-1">自己紹介</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded px-2 py-1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              保存
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded">
              キャンセル
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p><strong>名前:</strong> {user.name}</p>
          <p><strong>メールアドレス:</strong> {user.email}</p>
          <p><strong>自己紹介:</strong> {user.bio}</p>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            プロフィールを編集
          </button>
        </div>
      )}
      <h3 className="text-xl font-bold mt-8 mb-4">投稿履歴</h3>
      <ul className="space-y-2">
        {user.posts.map(post => (
          <li key={post.id} className="border-b pb-2">
            <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">{post.title}</a>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;