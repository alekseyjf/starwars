import React, {Component} from 'react'
import Spinner from '../spinner';

import './item-details.css';

import SwapiService from '../../services/swapi';

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

export default class ItemDetails extends Component {

  state = {
    item: null,
    spinner: false,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.props.itemId !== prevProp.itemId) {
      this.setState({spinner: true})
      this.updateItem()
    }
  }

  updateItem = () => {
    const {itemId, getData, getImgUrl} = this.props;


    if (!itemId) {
      return;
    }

    getData(itemId)
    .then((item) => {
      this.setState({
        item,
        spinner: false,
        image: getImgUrl(item)
      })
    })
  };

  render() {
    const {spinner, item} = this.state;
    if (!this.state.item) {
      return <span>Select a person from a list</span>
    }

    const DeteilsFragment = !spinner ?
        <Details details={item} image={this.state.image} children={this.props.children}/> : <Spinner/>

    return (
        <div className='item-details card'>
          {DeteilsFragment}
        </div>
    )
  }
}

const Details = ({details, image, children}) => {
  console.log(details);
  const {id, name, gender, birthYear, eyeColor} = details;
  console.log(details);
  return (
      <React.Fragment>
        <img className='img' src={image} alt="img"/>
        {/*<img height="200px" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="img"/>*/}
        <div className='card-body'>
          <h4>{name} {/*{this.props.selectedDetails}*/}</h4>
          <ul className='list-group list-group-flush'>
            {/*{children}*/}
            {
              React.Children.map(children, (child ) => {
                return React.cloneElement(child, {details})
              })
            }

          </ul>
        </div>
      </React.Fragment>
  )
}