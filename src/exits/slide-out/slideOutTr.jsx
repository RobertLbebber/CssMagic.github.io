
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class slideOutTr extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"slideOutTr"+" "+className}style={{animation:"slide-out-tr "+duration+" "+delay+" "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
slideOutTr.propTypes = {
	className:Proptype.string,
	delay:Proptype.number,
	duration:Proptype.number,
	loop:Proptype.oneOfType([Proptype.string,Proptype.number]),
	direction:Proptype.oneOf(["normal","reverse"]),
	easing:Proptype.string
}
	
slideOutTr.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:1,
	direction:normal,
	easing:easeInQuad
}
export default slideOutTr;