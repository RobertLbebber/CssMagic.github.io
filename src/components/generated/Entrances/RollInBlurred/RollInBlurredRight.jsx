
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class RollInBlurredRight extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"RollInBlurredRight"+" "+className}style={{animation:"roll-in-blurred-right "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
RollInBlurredRight.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
RollInBlurredRight.defaultProps = {
	className:"",
	delay:0,
	duration:0.65,
	loop:"1",
	direction:"normal",
	easing:"easeOutQuint"
}
export default RollInBlurredRight;
