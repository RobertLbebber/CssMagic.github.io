
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlideInEllipticRightBck extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlideInEllipticRightBck"+" "+className}style={{animation:"slide-in-elliptic-right-bck "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlideInEllipticRightBck.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlideInEllipticRightBck.defaultProps = {
	className:"",
	delay:0,
	duration:0.7,
	loop:"1",
	direction:"normal",
	easing:"easeOutQuad"
}
export default SlideInEllipticRightBck;
