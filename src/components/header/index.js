import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  const header = [
    {name: 'People', key: 1, to: '/people/'},
    {name: 'Planets', key: 2, to: '/planets/'},
    {name: 'Starships', key: 3, to: '/starships/'},
    {name: 'Login', key: 4, to: '/login/'},
    {name: 'Secret', key: 5, to: '/secret/'}
  ];
  const elements = header.map((item) => {
    const {name, key, to} = item;

    return (
        <li key={key}>
          <Link to={to}>
            {name}
          </Link>

        </li>
    )
  })
  return (
      <div className='header d-flex'>
        <Link to="/" className='logo'>STARWARS</Link>
        <ul className='d-flex'>
          {elements}
        </ul>
      </div>
  )
};

export default Header;