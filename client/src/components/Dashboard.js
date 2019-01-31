import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

  state = { term : '' };

  onInputChange = ({ target }) => {
    this.setState({ term : target.value });
  }

  hasThree = () => {
    const { term } = this.state;
    console.log('has three:', term);
    if(term.length >= 3) {
      const config = {params: {searchQuery: term}};
      axios.get('api/instant', config).then(response => {
        console.log(response);
      });
    }

  }

  render() {
    return (
      <div>
        Dashboard
        <input placeholder="Search for info"
          value={this.state.term}
          onChange={this.onInputChange}
          style={{"backgroundColor": "grey"}}
          />
        Term: {this.state.term}
        {this.hasThree()}
      </div>
    )
  }
}

export default Dashboard;
