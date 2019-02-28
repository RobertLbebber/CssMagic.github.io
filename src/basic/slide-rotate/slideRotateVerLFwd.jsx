
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class slideRotateVerLFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"slideRotateVerLFwd"+" "+className}style={{animation:"slide-rotate-ver-l-fwd "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
slideRotateVerLFwd.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
slideRotateVerLFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:1,
	direction:normal,
	easing:easeInOutQuad
}
export default slideRotateVerLFwd;