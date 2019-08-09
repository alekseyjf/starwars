import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';
const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;
  const items = data.map((item) => {
    const {id} = item,
          label = renderLabel(item);

    return <li onClick={() => onItemSelected(id)} className="list-group-item" key={id}>{label}</li>
  });

  return (
    <ul className='list-group peoples card'>
      {items}
    </ul>
  )
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;