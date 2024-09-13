import React, { useState } from 'react';

const Comment = ({ comment, onReply, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleEdit = () => {
    onEdit(comment.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="comment border-b py-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">{comment.author}</p>
          <p className="text-sm text-gray-500">{comment.date}</p>
        </div>
        {comment.isAuthor && (
          <div className="space-x-2">
            <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500 hover:underline">
              編集
            </button>
            <button onClick={() => onDelete(comment.id)} className="text-red-500 hover:underline">
              削除
            </button>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className="mt-2">
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full border rounded px-2 py-1"
            rows="3"
          />
          <div className="mt-2">
            <button onClick={handleEdit} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
              保存
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-3 py-1 rounded">
              キャンセル
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-2">{comment.content}</p>
      )}
      <button onClick={() => onReply(comment.id)} className="text-blue-500 hover:underline mt-2">
        返信
      </button>
    </div>
  );
};

export default Comment;