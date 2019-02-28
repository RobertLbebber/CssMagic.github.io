
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class rotateOutHor extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"rotateOutHor"+" "+className}style={{animation:"rotate-out-hor "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
rotateOutHor.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
rotateOutHor.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:1,
	direction:normal,
	easing:easeInQuad
}
export default rotateOutHor;
