
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class scaleDownVerBottom extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"scaleDownVerBottom"+" "+className}style={{animation:"scale-down-ver-bottom "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
scaleDownVerBottom.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
scaleDownVerBottom.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:1,
	direction:normal,
	easing:easeOutQuad
}
export default scaleDownVerBottom;
