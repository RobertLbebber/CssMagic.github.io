
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class slideInEllipticRightBck extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"slideInEllipticRightBck"+" "+className}style={{animation:"slide-in-elliptic-right-bck "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
slideInEllipticRightBck.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
slideInEllipticRightBck.defaultProps = {
	className:"",
	delay:0,
	duration:0.7,
	loop:1,
	direction:normal,
	easing:easeOutQuad
}
export default slideInEllipticRightBck;
