
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class flipDiagonal2Fwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"flipDiagonal2Fwd"+" "+className}style={{animation:"flip-diagonal-2-fwd "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
flipDiagonal2Fwd.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
flipDiagonal2Fwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:1,
	direction:normal,
	easing:easeInOutQuad
}
export default flipDiagonal2Fwd;