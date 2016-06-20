import React, { Component, PropTypes } from 'react'
import { Link, Router, Route, hashHistory } from 'react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CounterActions from '../actions'

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
        {this.props.children}
      </div>
    );
  }
}


export default App