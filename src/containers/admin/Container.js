import React from 'react'


class Container extends React.Component {

	constructor(props) {
	    super(props);
	    this.functionDemo = this.functionDemo.bind(this);
	}

	functionDemo(e) {
	    e.preventDefault();
	}

	render() {
	    return (
	    	<div className="container">
	    		內容
	    	</div>
	    );
	}
}

export default Container;
