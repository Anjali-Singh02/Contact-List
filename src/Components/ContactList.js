import React, { Fragment } from 'react';
import { ContactCard } from './ContactCard';
import { Link } from 'react-router-dom';
export const ContactList = (props) => {
	const listContainer = {
		marginTop: '100px',
		border: '1px solid green',
		width: '45%',
		borderRadius: '10px',
		padding: '10px 20px 30px',
		boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
	};
	const subListContainer = {
		width: '100%',
		height: '175px',
		overflowY: 'scroll',
		boxShadow: '4px 3px 6px rgba(0, 0, 0, 0.5)',
		padding: '10px',
	};
	const removeContactHandler = (id) => {
		props.deleteContactHandler(id);
	};

	const renderContactList = props.contacts.map((contact) => {
		return (
			<Fragment>
				<ContactCard
					contact={contact}
					clickHandler={removeContactHandler}
					key={contact.id}
				/>
			</Fragment>
		);
	});
	console.log(props);
	return (
		<Fragment>
			<div className="ui container" style={listContainer}>
				<div className="ui celled list">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '20px',
						}}
					>
						<h2>Contact List</h2>
						<Link to="/add">
							<button
								className="ui green basic button"
								style={{
									width: '150px',
									fontSize: '16px',
									fontWeight: 'bold',
								}}
							>
								Add Contacts
							</button>
						</Link>
					</div>
					<div style={subListContainer}>{renderContactList}</div>
				</div>
			</div>
		</Fragment>
	);
};
