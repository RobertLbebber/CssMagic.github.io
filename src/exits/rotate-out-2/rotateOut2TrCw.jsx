
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class rotateOut2TrCw extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"rotateOut2TrCw"+" "+className}style={{animation:"rotate-out-2-tr-cw "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
rotateOut2TrCw.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
rotateOut2TrCw.defaultProps = {
	className:"",
	delay:0,
	duration:0.6,
	loop:1,
	direction:normal,
	easing:easeOutQuad
}
export default rotateOut2TrCw;
