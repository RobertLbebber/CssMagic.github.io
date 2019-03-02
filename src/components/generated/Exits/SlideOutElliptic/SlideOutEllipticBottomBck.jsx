
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlideOutEllipticBottomBck extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlideOutEllipticBottomBck "+className}style={{animation:"slide-out-elliptic-bottom-bck "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlideOutEllipticBottomBck.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlideOutEllipticBottomBck.defaultProps = {
	className:"",
	delay:0,
	duration:0.7,
	loop:"1",
	direction:"normal",
	easing:"easeIn"
}
export default SlideOutEllipticBottomBck;