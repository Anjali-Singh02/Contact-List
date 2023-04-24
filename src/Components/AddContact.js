import { useState } from 'react';
import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export const AddContact = (props) => {
	// ************** CSS variables **************
	const containerStyle = {
		marginTop: '90px',
		border: '0.5px solid green',
		borderRadius: '10px',
		width: '45%',
		boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
	};
	const lableStyle = {
		fontSize: '20px',
		padding: '10px',
	};

	// ******** State ***********
	const [contact, setContact] = useState({
		name: '',
		phone: '',
		email: '',
	});
	const navigate = useNavigate();

	const addHandler = (event) => {
		event.preventDefault();
		if (!contact.name || !contact.email || !contact.phone) {
			alert('Please fill all the fields!');
			return;
		}
		// console.log(contact);
		props.addContactHandler(contact);
		setContact({
			name: '',
			phone: '',
			email: '',
		});
		navigate('/');
	};

	return (
		<Fragment>
			<div className="ui container" style={containerStyle}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '5px 5px 10px',
						boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
					}}
				>
					<h2>Add Contacts</h2>
					<Link to="/">
						<button
							className="ui  green basic button"
							style={{
								width: '130px',
								fontSize: '16px',
								fontWeight: 'bold',
							}}
						>
							Contacts
						</button>
					</Link>
				</div>
				{/* <hr style={{ boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }} /> */}

				<form className="ui form" onSubmit={addHandler}>
					<div className="field" style={{ padding: '10px' }}>
						<label htmlFor="name" style={lableStyle}>
							Name
						</label>
						<input
							style={{
								boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
							}}
							type="text"
							name="name"
							value={contact.name}
							placeholder="Enter name"
							onChange={(event) =>
								setContact({
									...contact,
									name: event.target.value,
								})
							}
						/>

						<label htmlFor="phone" style={lableStyle}>
							Phone Number
						</label>
						<input
							style={{
								boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
							}}
							type="text"
							name="phone"
							value={contact.phone}
							placeholder="Enter Phone number"
							onChange={(event) =>
								setContact({
									...contact,
									phone: event.target.value,
								})
							}
						/>
						<label htmlFor="email" style={lableStyle}>
							Email
						</label>
						<input
							style={{
								boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
							}}
							type="text"
							name="email"
							value={contact.email}
							placeholder="Enter email"
							onChange={(event) =>
								setContact({
									...contact,
									email: event.target.value,
								})
							}
						/>
						<div
							style={{
								padding: '20px 0 0',
								textAlign: 'end',
							}}
						>
							<button
								className="ui green basic button"
								style={{
									width: '130px',
									fontSize: '16px',
									fontWeight: 'bold',
									boxShadow: '0 2px 4px #00ff00;',
								}}
							>
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};
