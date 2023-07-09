import React, { useState } from 'react';
import Link from 'next/link';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidenav">
      <button onClick={toggleNav}>☰ Menu</button>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link href="/home">
             Home
            </Link>
          </li>
          <li>
            <Link href="/login">
              About
            </Link>
          </li>
          <li>
            <Link href="/signup">
             Contact
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .sidenav {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
        }

        button {
          display: none;
        }

        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 200px;
          background-color: #f1f1f1;
          transition: all 0.3s ease-in-out;
          transform: translateX(-200px);
        }

        nav.open {
          transform: translateX(0);
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin: 10px 0;
        }

        a {
          color: #333;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          button {
            display: block;
          }

          nav {
            transform: translateX(-100%);
          }

          nav.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SideNav;
