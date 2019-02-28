
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class slideOutBlurredBr extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"slideOutBlurredBr"+" "+className}style={{animation:"slide-out-blurred-br "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
slideOutBlurredBr.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
slideOutBlurredBr.defaultProps = {
	className:"",
	delay:0,
	duration:0.45,
	loop:1,
	direction:normal,
	easing:easeInQuint
}
export default slideOutBlurredBr;
