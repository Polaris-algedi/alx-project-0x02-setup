import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow p-4">
      <nav>
        <ul className="flex gap-1 justify-end ">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
