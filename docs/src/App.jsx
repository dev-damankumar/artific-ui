import React, {useState} from 'react';
import './index.css'
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import {Col, Container, Row, Space, ThemeProvider} from "artific-ui";
import Controls from "./components/Controls.jsx";
import GetStarted from '../../stories/getstarted.stories.mdx'
import Installation from '../../stories/installation.stories.mdx'
import {Route, Routes} from "react-router-dom";
import {Outlet} from "react-router";
import docs from "./docs.jsx";
import theme from "./theme.js";
import RightSidebar from "./components/RightSideBar";


function App() {
	const [openLeftSidebar, setOpenLeftSidebar]=useState(false)
	const toggleSidebar=() => {
		setOpenLeftSidebar(!openLeftSidebar)
	}
	const closeSidebar=() => {
		setOpenLeftSidebar(false)
	}
	return <>
		<div className="container-div">
			<Sidebar closeSidebar={closeSidebar} openLeftSidebar={openLeftSidebar}/>
			<div className="wrapper">
				<Header toggleSidebar={toggleSidebar}/>
				<Container fluid>
					<Row>
						<Col col={9} className="main-column">
							<div className="main-container">
								<ThemeProvider theme={theme}>
									<Space direction="vertical" gap={[0, 30]}>
										<Controls/>
									</Space>
								</ThemeProvider>
								<Space gap={15} direction="vertical">
									<Routes>
										<Route path="/" exact element={<GetStarted noMainHeading={true}/>}/>
										<Route path="/get-started" element={<GetStarted noMainHeading={true}/>}/>
										<Route path="/installation" element={<Installation noMainHeading={true}/>}/>
										{docs.map((doc, index) => {
											return <Route key={`id-${doc.path}-${index}`} path={doc.path} element={doc.element}/>
										})}
									</Routes>
									<Outlet/>
									<ThemeProvider theme={theme}>
										<Controls/>
									</ThemeProvider>
								</Space>
							</div>
						</Col>
						<Col col={3} className="right-column">
							<div className="right-sidebar">
								<RightSidebar/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>

	</>
}

export default App;
