import React, { Component } from 'react';
// import PropTypes, { number } from "prop-types";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    // console.log("test:", contactData);
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase ||
        contact.number === number
    );
    existingContact
      ? alert(`${name}, ${number} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { name, number, id: nanoid() }],
        }));
    // console.log(this.prevState);
    console.log(this.state.contacts);
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'column',
          // alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilterHandler} />
          <ContactsList
            contacts={ this.getFilteredContacts() }
            onDeleteContact={this.deleteContactHandler}
          />
        </Section>

        <GlobalStyle />
      </div>
    );
  }
}


