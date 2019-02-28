
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class flipVerticalFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"flipVerticalFwd"+" "+className}style={{animation:"flip-vertical-fwd "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
flipVerticalFwd.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
flipVerticalFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:1,
	direction:normal,
	easing:easeInOutQuad
}
export default flipVerticalFwd;
