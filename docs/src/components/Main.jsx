import React, {Suspense} from 'react';
import {Space, ThemeProvider} from "../../../src/index";
import theme from "../theme.js";
import Controls from "./Controls.jsx";
import ContentLoader from "./ContentLoader.jsx";
import {Route, Routes} from "react-router-dom";
import GetStarted from "../pages/getstarted.mdx";
import docs from "../docs.jsx";
import {Outlet} from "react-router";

const Installation=React.lazy(() => import("../pages/installation.mdx"));
const Layouts=React.lazy(() => import("../pages/Layouts.mdx"));
const Variants=React.lazy(() => import("../pages/Variants.mdx"));
const Themes=React.lazy(() => import("../pages/Themes.mdx"));
const Sizes=React.lazy(() => import("../pages/Sizes.mdx"));
const Main=() => {
	return (
		<div className="main-container">
			<ThemeProvider theme={theme}>
				<Space direction="vertical" gap={[0, 30]}>
					<Controls/>
				</Space>
			</ThemeProvider>
			<Space gap={15} direction="vertical">
				<Suspense fallback={<ContentLoader/>}>
					<Routes>
						<Route path="/" exact element={<GetStarted noMainHeading={true}/>}/>
						<Route path="/get-started" element={<GetStarted noMainHeading={true}/>}/>
						<Route path="/installation" element={<Installation noMainHeading={true}/>}/>
						<Route path="/layouts" element={<Layouts noMainHeading={true}/>}/>
						<Route path="/variants" element={<Variants noMainHeading={true}/>}/>
						<Route path="/themes" element={<Themes noMainHeading={true}/>}/>
						<Route path="/sizes" element={<Sizes noMainHeading={true}/>}/>
						{docs.map((doc, index) => {
							return <Route key={`id-${doc.path}-${index}`} path={doc.path} element={doc.element}/>
						})}
					</Routes>
				</Suspense>
				<Outlet/>
				<ThemeProvider theme={theme}>
					<Controls/>
				</ThemeProvider>
			</Space>
		</div>
	);
};

export default Main;
