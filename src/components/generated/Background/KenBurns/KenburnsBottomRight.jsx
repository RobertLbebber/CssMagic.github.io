
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class KenburnsBottomRight extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"KenburnsBottomRight"+" "+className}style={{animation:"kenburns-bottom-right "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
KenburnsBottomRight.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
KenburnsBottomRight.defaultProps = {
	className:"",
	delay:0,
	duration:5,
	loop:"1",
	direction:"normal",
	easing:"easeOut"
}
export default KenburnsBottomRight;
