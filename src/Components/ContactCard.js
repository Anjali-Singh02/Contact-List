import React from 'react';
import { Fragment } from 'react';

export const ContactCard = (props) => {
	const { id, name, email, phone } = props.contact;

	return (
		<Fragment>
			<div
				className="item"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2,1fr)',
					gridGap: '1rem',
					boxShadow: ' 0 4px rgba(0, 0, 0, 0.1)',
					padding: '10px',
				}}
			>
				<div
					className="content"
					style={{
						padding: '8px',
					}}
				>
					<div className="ui small header">{name}</div>
					<div>{phone}</div>
					<div className="">{email}</div>
				</div>
				<div style={{ cursor: 'pointer', textAlign: 'end' }}>
					<i
						className="trash icon red"
						onClick={() => props.clickHandler(id)}
					></i>
				</div>
			</div>
		</Fragment>
	);
};
