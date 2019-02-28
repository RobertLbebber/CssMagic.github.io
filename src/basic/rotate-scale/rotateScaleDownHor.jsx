
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class rotateScaleDownHor extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"rotateScaleDownHor"+" "+className}style={{animation:"rotate-scale-down-hor "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
rotateScaleDownHor.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
rotateScaleDownHor.defaultProps = {
	className:"",
	delay:0,
	duration:0.65,
	loop:1,
	direction:normal,
	easing:linear
}
export default rotateScaleDownHor;