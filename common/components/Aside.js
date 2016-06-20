import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Aside extends Component {
  render() {
    return (
      <aside className="left-aside pc">
      	<div className="overlay"></div>
      	<div className="info">
      		<header>
      			<a href="/"><img src="../resources/images/lee.jpg" /></a>
      			<h2>Groove明阳</h2>
      			<h6>床前明月光，疑是地上霜</h6>
      			<div className="Tab">
      				<div className="tab-icon"></div>
      				<div className="box">
      					<div className='container'>
      						<nav className="header-menu">
      							<ul>
      								<li><Link to="/home">主页</Link></li>
      								<li><Link to="/home">所有文章</Link></li>
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
    )
  }
}

Aside.propTypes = {
 
}

export default Aside