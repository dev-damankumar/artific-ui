import React from 'react';
import {IconButton} from "artific-ui";
import github from "../assets/images/github.png";
import ThemeMode from "./ThemeMode.jsx";

const UserSettings=() => {
	return (
		<div className="user-settings">
			<IconButton className="icon-btn" variant="text" layout="rounded">
				<img src={github}/>
			</IconButton>
			<ThemeMode/>
		</div>
	);
};

export default UserSettings;
