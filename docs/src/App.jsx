import React from 'react';
import './index.css'
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import {Container, Space} from "../../src/index";
import Controls from "./components/Controls.jsx";
import GetStarted from '../../stories/getstarted.stories.mdx'
import Installation from '../../stories/installation.stories.mdx'
import {Route, Routes} from "react-router-dom";
import {Outlet} from "react-router";
import docs from "./docs.jsx";


function App() {
	return <div className="container-div">
		<Sidebar/>
		<div className="wrapper">
			<Header/>
			<Container>
				<div className="main-container">
					<Space direction="vertical" gap={[0, 30]}>
						<Controls/>
					</Space>
					<Space gap={15} direction="vertical">
						<Routes>
							<Route path="/" exact element={<h1>Hello</h1>}/>
							<Route path="/get-started" element={<GetStarted noMainHeading={true}/>}/>
							<Route path="/installation" element={<Installation noMainHeading={true}/>}/>
							{docs.map(doc => {
								return <Route path={doc.path} element={doc.element}/>
							})}
						</Routes>
						<Outlet/>
						<Controls/>
					</Space>

				</div>

			</Container>
		</div>
	</div>

}

export default App;
