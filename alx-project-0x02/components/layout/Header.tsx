import React from "react";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow p-4">
      <nav>
        <ul className="flex gap-1 justify-end ">
          <li>
            {/* <Link to="/home">Home</Link> */}
            <a href="/home">Home</a>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
