import React, {Component} from 'react';

import './item-list.css'

export default class ItemList extends Component {
  render() {
    return (
        <ul className='item-list list-group'>
          <li className='list-group'>
            Luke Skywalker
          </li>
          <li className='list-group'>
            Dart Vader
          </li>
          <li className='list-group'>
            R2-D2
          </li>
        </ul>
    )
  }
}