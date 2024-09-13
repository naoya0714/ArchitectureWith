import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, category, dateFrom, dateTo });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="検索キーワード"
            className="flex-grow border rounded-l px-2 py-1"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-r">
            検索
          </button>
        </div>
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-blue-500 hover:underline"
        >
          {showAdvanced ? '詳細検索を隠す' : '詳細検索を表示'}
        </button>
        {showAdvanced && (
          <div className="advanced-search space-y-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">全てのカテゴリー</option>
              <option value="general">一般</option>
              <option value="tech">技術</option>
              <option value="lifestyle">ライフスタイル</option>
            </select>
            <div className="flex space-x-2">
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="flex-grow border rounded px-2 py-1"
                placeholder="開始日"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="flex-grow border rounded px-2 py-1"
                placeholder="終了日"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;