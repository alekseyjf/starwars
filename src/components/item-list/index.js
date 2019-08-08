import React, {Component} from 'react';

import Spinner from '../spinner';

import './item-list.css'

export default class ItemList extends Component {

  state = {
    peoples: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
    .then((peoples)=>{
      console.log(peoples);
      this.setState({
        peoples
      })
    })
  }

  renderItems = (arr) => {
    return arr.map((item)=>{

      const { id } = item;
      const label = this.props.children(item);
      return <li onClick={() => this.props.onPersonSelected(id)} className="list-group-item" key={id} >{label}</li>
    })
  }

  // getPerson = () => {
    // const id = 3;
    // this.swapiService
    // .getPerson(10)
    // .then((people) => {
    //   console.log(people);
    //   /*this.setState(({person}) => {
    //     name: person.name
    //   })*/
    //     }
    // )
    // .catch(this.onError);
  // }

  render() {

    const { peoples } = this.state,
          peopleView = peoples ? this.renderItems(peoples) : null

    if( !peoples ) {
      return <Spinner />
    }
    return (
        <ul className='list-group peoples card'>
          {/*<pre>{personView}</pre>*/}
          {peopleView}

        </ul>
    )
  }
}