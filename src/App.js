import { useEffect, useState } from 'react';
import { AddContact } from './Components/AddContact';
import { ContactList } from './Components/ContactList';
import { Header } from './Components/Header';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
function App() {
	const LOCAL_STORAGE_KEY = 'contacts';
	const [contacts, setContacts] = useState(
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
	);

	const addContactHandler = (contact) => {
		console.log(contact, 'from app comp');
		setContacts([...contacts, { id: uuidv4(), ...contact }]);
	};
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	const deleteContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};
	return (
		<div className="ui container">
			<Header />
			<Routes>
				<Route
					path="/add"
					element={
						<AddContact addContactHandler={addContactHandler} />
					}
				/>

				<Route
					path="/"
					element={
						<ContactList
							contacts={contacts}
							deleteContactHandler={deleteContactHandler}
						/>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
