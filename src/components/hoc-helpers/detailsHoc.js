import {Component} from "react";
import React from "react";

const withDetails = (Comp, getData, getImgUrl) => {
  return class extends Component {

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
      const { itemId } = this.props;


      if (!itemId) {
        return;
      }
      console.log('1', this.props);
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
      return <Comp {...this.props} data={this.state}/>
    }
  }
};

export default withDetails;