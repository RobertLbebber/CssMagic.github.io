
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SwirlOutBrFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SwirlOutBrFwd"+" "+className}style={{animation:"swirl-out-br-fwd "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SwirlOutBrFwd.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SwirlOutBrFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.65,
	loop:"1",
	direction:"normal",
	easing:"easeIn"
}
export default SwirlOutBrFwd;
