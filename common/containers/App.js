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
      	<aside className="left-aside pc">
          <div className="overlay"></div>
          <div className="info">
            <header>
              <a href=""><img src="" /></a>
              <h2>Groove明阳2</h2>
              <h6>床前明月光，疑是地上霜</h6>
              <div className="Tab">
                <div className="tab-icon"></div>
                <div className="box">
                  <div className='container'>
                    <nav className="header-menu">
                      <ul>
                        <li><Link to="/home">主页</Link></li>
                        <li><Link to="/about">所有文章</Link></li>
                        <li><Link to="/home">随笔</Link></li>
                        <li><Link to="/home">相册</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </aside>
      	{!this.props.children && <Home />}
        {this.props.children}
      </div>
    );
  }
}


export default App