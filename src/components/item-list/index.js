import React from 'react';

import './item-list.css';
const ItemList = (props) => {

  const {data, onPersonSelected, children: renderLabel} = props;
  const items = data.map((item) => {
    const {id} = item,
          label = renderLabel(item);

    return <li onClick={() => onPersonSelected(id)} className="list-group-item" key={id}>{label}</li>
  });

  return (
    <ul className='list-group peoples card'>
      {items}
    </ul>
  )
};

export default ItemList;