
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class flipOutVerLeft extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"flipOutVerLeft"+" "+className}style={{animation:"flip-out-ver-left "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
flipOutVerLeft.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
flipOutVerLeft.defaultProps = {
	className:"",
	delay:0,
	duration:0.45,
	loop:1,
	direction:normal,
	easing:easeInQuad
}
export default flipOutVerLeft;
