import React from 'react';
import logo from "../assets/images/logo-1-lg.png";

const Logo=() => {
	return (
		<a className="logo-expand" href="#">
			<img className="logo" src={logo}/>
			<span className="logo-span">Artific UI</span>
		</a>
	);
};

export default Logo;
