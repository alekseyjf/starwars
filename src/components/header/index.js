import React from 'react';

import './header.css';

const Header = () => {
  const hedaer = [
    {name: 'People', key: 1},
    {name: 'Planets', key: 2},
    {name: 'Starships', key: 3}
  ];
  const elements = hedaer.map((item) => {
    const {name, key} = item;

    return (
        <li key={key}>
          {name}
        </li>
    )
  })
  return (
      <div className='header d-flex'>
        <a href="/" className='logo'>STARWARS</a>
        <ul className='d-flex'>
          {elements}
        </ul>
      </div>
  )
};

export default Header;