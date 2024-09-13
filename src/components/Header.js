import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, username }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">掲示板サイト</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/categories">カテゴリー</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/profile">{username}</Link></li>
                <li><Link to="/logout">ログアウト</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">ログイン</Link></li>
                <li><Link to="/register">登録</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;