import React from 'react'
import Spinner from '../spinner';

import './item-details.css';


const Record = ({details, field, label}) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}</span>
      <span>{details[field]}</span>
    </li>
  )
}

export {
  Record
}

const ItemDetails = (props) => {
  const {children, data: {spinner, image, item}} = props;

  if (!item) {
    return <span>Select a person from a list</span>
  }

  const DeteilsFragment = !spinner ?
    <Details details={item} image={image} children={children}/> : <Spinner/>

  return (
    <div className='item-details card'>
      {DeteilsFragment}
    </div>
  )
}

const Details = ({details, image, children}) => {
  const {name} = details;
  return (
    <React.Fragment>
      <img className='img' src={image} alt="img"/>
      <div className='card-body'>
        <h4>{name} {/*{this.props.selectedDetails}*/}</h4>
        <ul className='list-group list-group-flush'>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {details})
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ItemDetails;