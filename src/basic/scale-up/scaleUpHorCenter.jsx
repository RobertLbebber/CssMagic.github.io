
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class scaleUpHorCenter extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"scaleUpHorCenter"+" "+className}style={{animation:"scale-up-hor-center "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
scaleUpHorCenter.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
scaleUpHorCenter.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:1,
	direction:normal,
	easing:easeOutSine
}
export default scaleUpHorCenter;