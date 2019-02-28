
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class rollInBlurredRight extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"rollInBlurredRight"+" "+className}style={{animation:"roll-in-blurred-right "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
rollInBlurredRight.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
rollInBlurredRight.defaultProps = {
	className:"",
	delay:0,
	duration:0.65,
	loop:1,
	direction:normal,
	easing:easeOutQuint
}
export default rollInBlurredRight;
