import React from 'react';
import logo from "../assets/images/logo-1-lg.png";
import {Dropdown, DropdownMenu, DropdownToggle, MenuItem} from "artific-ui";

const Logo=() => {
	return (
		<a className="logo-expand" href="#">
			<img className="logo" src={logo}/>
			<span className="logo-span">Artific UI</span>
			<Dropdown className="version-dropdown" theme="light" size="sm" variant="drawer" fullwidth style={{marginLeft: 'auto'}}>
				<DropdownToggle className="version-button" variant="text">
					1.0.2
				</DropdownToggle>
				<DropdownMenu>
					<MenuItem>1.0.0</MenuItem>
					<MenuItem>1.0.1</MenuItem>
					<MenuItem>1.0.2</MenuItem>
				</DropdownMenu>
			</Dropdown>
		</a>
	);
};

export default Logo;
