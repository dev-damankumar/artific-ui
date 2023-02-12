import React from 'react';
import {IconButton, Typography} from "../../../src/index";
import github from "../assets/images/github.png";
import setting from "../assets/images/settings.png";


const Header=() => {
	return (
		<div className="header">
			<div className="search-bar">
				<i className='bx search-icon bx-search-alt-2'></i>
				<input type="text" placeholder="Search..."/>
				<Typography weight="bold" fontSize={12} theme="dark" className="shortcut" variant="kbd">Ctrl+K</Typography>
			</div>
			<div className="user-settings">
				<IconButton className="icon-btn" variant="text" layout="rounded">
					<img src={github}/>
				</IconButton>
				<IconButton className="icon-btn" variant="text" layout="rounded">
					<img src={setting}/>
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
