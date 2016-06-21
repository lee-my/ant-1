import React from 'react'


class Header extends React.Component {

	constructor(props) {
	    super(props);
	    this.functionDemo = this.functionDemo.bind(this);
	}

	functionDemo(e) {
	    e.preventDefault();
	}

	render() {
	    return (
	    	<header className="header">
	    		<a href=""><img src="../../images/logo-eol.png" height="40" width="203" /></a>
	    	</header>
	    );
	}
}

export default Header;
