import React from 'react';
import {Button, Col, Row} from "artific-ui";

const Controls=() => {
	return (
		<Row className="controls">
			<Col col={6}>
				<Button theme="dark" layout="rounded" prefix={
					<i className='bx bx-chevron-left'></i>}>Prev</Button>
			</Col>
			<Col justify="end" col={6}>
				<Button style={{marginLeft: 'auto', display: 'flex'}} theme="dark" layout="rounded" suffix={
					<i className='bx bx-chevron-right'></i>}>Next</Button>
			</Col>
		</Row>
	);
};

export default Controls;
