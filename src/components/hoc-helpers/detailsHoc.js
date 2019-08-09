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
      this.setState({
        spinner: true
      })
      const { itemId } = this.props;
      console.log(itemId);
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
      return <Comp {...this.props} data={this.state}/>
    }
  }
};

export default withDetails;