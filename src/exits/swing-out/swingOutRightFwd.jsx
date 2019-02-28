
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class swingOutRightFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"swingOutRightFwd"+" "+className}style={{animation:"swing-out-right-fwd "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
swingOutRightFwd.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
swingOutRightFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.55,
	loop:1,
	direction:normal,
	easing:easeInBack
}
export default swingOutRightFwd;
