
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class slideOutEllipticTopFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"slideOutEllipticTopFwd"+" "+className}style={{animation:"slide-out-elliptic-top-fwd "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
slideOutEllipticTopFwd.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
slideOutEllipticTopFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.7,
	loop:1,
	direction:normal,
	easing:easeInQuad
}
export default slideOutEllipticTopFwd;
