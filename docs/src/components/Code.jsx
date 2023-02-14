import React, {useEffect} from 'react';
import "../assets/prism.css"
import "../index.css"
import {IconButton, Tooltip, Typography} from "../../../src/index";
import Prism from "prismjs";


const Code=({children}) => {
	useEffect(() => {
		Prism.highlightAll()
	}, [children])
	return (
		<div className="code-div dark-mode-code">
			<Tooltip placement="top" theme="light" variant="arrow" title="Copy code">
				<IconButton className="copy-btn" layout="rounded" variant="text" theme="light">
					<i className='bx bx-copy'></i>
				</IconButton>
			</Tooltip>
			<Typography variant="pre" className="pre">
				<Typography variant="code" className="language-js">
					{children.toString().trim()}
				</Typography>
			</Typography>
		</div>
	);
};

export default Code;
