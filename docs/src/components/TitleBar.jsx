import React from 'react';

const TitleBar=({title='Artific UI'}) => {
	return (
		<div className="main-blog anim">
			<div className="main-blog__title">{title}</div>
			<div className="main-blog__author">
				<div className="author-img__wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
						<path d="M20 6L9 17l-5-5"/>
					</svg>
					<img className="author-img" src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
				</div>
				<div className="author-detail">
					<div className="author-name">Daman Kumar</div>
					<div className="author-info">53K views <span className="seperate"/>2 weeks ago</div>
				</div>
			</div>
			<div className="main-blog__time">7 min</div>
		</div>
	);
};

export default TitleBar;
