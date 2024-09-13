import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 掲示板サイト. All rights reserved.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/privacy" className="text-blue-600 hover:underline">プライバシーポリシー</Link></li>
            <li><Link to="/terms" className="text-blue-600 hover:underline">利用規約</Link></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;