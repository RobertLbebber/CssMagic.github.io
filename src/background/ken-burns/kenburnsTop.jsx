
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class kenburnsTop extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"kenburnsTop"+" "+className}style={{animation:"kenburns-top "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
kenburnsTop.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
kenburnsTop.defaultProps = {
	className:"",
	delay:0,
	duration:5,
	loop:1,
	direction:normal,
	easing:easeOut
}
export default kenburnsTop;
