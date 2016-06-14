import React, { Component, PropTypes } from 'react';

import Home from '../components/Home'
import Aside from '../components/Aside'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
      	<Aside />
      	{!this.props.children && <Home />}
      </div>
    );
  }
}

export default App