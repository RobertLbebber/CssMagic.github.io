
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class BounceInLeft extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"BounceInLeft "+className}style={{animation:"bounce-in-left "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
BounceInLeft.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
BounceInLeft.defaultProps = {
	className:"",
	delay:0,
	duration:1.1,
	loop:"1",
	direction:"normal",
	easing:"ease"
}
export default BounceInLeft;