import React, { Fragment } from 'react';

export const Header = () => {
	return (
		<Fragment>
			<div
				className="ui header"
				style={{
					textAlign: 'center',
					marginTop: '30px',
					textTransform: 'uppercase',
				}}
			>
				<h1>Contact manager</h1>
			</div>
		</Fragment>
	);
};
