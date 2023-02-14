import React from "react";

const Accordion=React.lazy(() => import("./pages/Accordion.mdx"));

const Alert=React.lazy(() => import("./pages/Alert.mdx"));
const Avatar=React.lazy(() => import("./pages/Avatar.mdx"));
const Badge=React.lazy(() => import("./pages/Badge.mdx"));
const Button=React.lazy(() => import("./pages/Button.mdx"));
const ButtonGroup=React.lazy(() => import("./pages/ButtonGroup.mdx"));
const Card=React.lazy(() => import("./pages/Card.mdx"));
const Divider=React.lazy(() => import("./pages/Divider.mdx"));
const Dropdown=React.lazy(() => import("./pages/Dropdown.mdx"));
const Tabs=React.lazy(() => import("./pages/Dropdown.mdx"));
const IconButton=React.lazy(() => import("./pages/IconButton.mdx"));
const Grid=React.lazy(() => import("./pages/Grid.mdx"));
const List=React.lazy(() => import("./pages/List.mdx"));
const Loader=React.lazy(() => import("./pages/Loaders.mdx"));
const Message=React.lazy(() => import("./pages/Messages.mdx"));
const Modal=React.lazy(() => import("./pages/Modal.mdx"));
const Pagination=React.lazy(() => import("./pages/Pagination.mdx"));
const Progress=React.lazy(() => import("./pages/Progress.mdx"));
const Space=React.lazy(() => import("./pages/Space.mdx"));
const Spinner=React.lazy(() => import("./pages/Spinner.mdx"));
const Table=React.lazy(() => import("./pages/Table.mdx"));
const ThemeProvider=React.lazy(() => import("./pages/ThemeProvider.mdx"));
const Tooltip=React.lazy(() => import("./pages/Tooltip.mdx"));
const Typography=React.lazy(() => import("./pages/Typography.mdx"));


const docs=[
	{
		path: '/accordion',
		name: 'Accordion',
		element: <Accordion noMainHeading={true}/>
	},
	{
		path: '/alert',
		name: 'Alert',
		element: <Alert noMainHeading={true}/>
	},
	{
		path: '/avatar',
		name: 'Avatar',
		element: <Avatar noMainHeading={true}/>
	},
	{
		path: '/badge',
		name: 'Badge',
		element: <Badge noMainHeading={true}/>
	},
	{
		path: '/button',
		name: 'Button',
		element: <Button noMainHeading={true}/>
	},
	{
		path: '/button-group',
		name: 'ButtonGroup',
		element: <ButtonGroup noMainHeading={true}/>
	},
	{
		path: '/card',
		name: 'Card',
		element: <Card noMainHeading={true}/>
	},
	{
		path: '/divider',
		name: 'Divider',
		element: <Divider noMainHeading={true}/>
	},
	{
		path: '/dropdown',
		name: 'Dropdown',
		element: <Dropdown noMainHeading={true}/>
	},
	{
		path: '/grid',
		name: 'Grid',
		element: <Grid noMainHeading={true}/>
	},
	{
		path: '/icon-button',
		name: 'Icon Button',
		element: <IconButton noMainHeading={true}/>
	},
	{
		path: '/list',
		name: 'List',
		element: <List noMainHeading={true}/>
	}, {
		path: '/loader',
		name: 'Loader',
		element: <Loader noMainHeading={true}/>
	},
	{
		path: '/message',
		name: 'Message',
		element: <Message noMainHeading={true}/>
	},
	{
		path: '/modal',
		name: 'Modal',
		element: <Modal noMainHeading={true}/>
	},
	{
		path: '/pagination',
		name: 'Pagination',
		element: <Pagination noMainHeading={true}/>
	},
	{
		path: '/progress',
		name: 'Progress',
		element: <Progress noMainHeading={true}/>
	},
	{
		path: '/space',
		name: 'Space',
		element: <Space noMainHeading={true}/>
	},
	{
		path: '/spinner',
		name: 'Spinner',
		element: <Spinner noMainHeading={true}/>
	},
	{
		path: '/table',
		name: 'Table',
		element: <Table noMainHeading={true}/>
	},
	{
		path: '/tabs',
		name: 'Tabs',
		element: <Tabs noMainHeading={true}/>
	},
	{
		path: '/themeprovider',
		name: 'Theme Provider',
		element: <ThemeProvider noMainHeading={true}/>
	},
	{
		path: '/tooltip',
		name: 'Tooltip',
		element: <Tooltip noMainHeading={true}/>
	},
	{
		path: '/typography',
		name: 'Typography',
		element: <Typography noMainHeading={true}/>
	},

]

export default docs
