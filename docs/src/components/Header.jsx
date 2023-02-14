import React from 'react';
import {IconButton, Progress, ThemeProvider, Typography} from "../../../src/index";
import github from "../assets/images/github.png";
import setting from "../assets/images/settings.png";
import theme from "../theme.js";
import Logo from "./Logo.jsx";
import {Space} from "artific-ui";


const Header=({toggleSidebar}) => {

	return (
		<ThemeProvider theme={theme}>
			<div className="header">
				<div className="lg-show">
					<Space gap={5} align="center">
						<IconButton onClick={toggleSidebar} className="icon-btn" variant="text" layout="rounded">
							<svg width="30px" height="30px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
								<path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</IconButton>
						<Logo/>
					</Space>
				</div>
				<div className="search-bar">
					<IconButton noRipple className="search-icon" variant="text">
						<i className='bx  bx-search-alt-2'></i>
					</IconButton>
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
			<Progress size="xs" className="progress-header-bar" value={80} variant="striped" layout='no-radius' label="none" type="line"/>

		</ThemeProvider>
	);
};

export default Header;
