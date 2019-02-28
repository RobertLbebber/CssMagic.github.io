
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class flip2VerLeft2 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"flip2VerLeft2"+" "+className}style={{animation:"flip-2-ver-left-2 "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
flip2VerLeft2.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
flip2VerLeft2.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:1,
	direction:normal,
	easing:easeInOutQuad
}
export default flip2VerLeft2;