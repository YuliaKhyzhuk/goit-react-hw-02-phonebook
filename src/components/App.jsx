import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import Section from './Section/Section';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = contactData => {
    console.log(contactData);
  };

  render() {
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
        <Section title="Contacts"></Section>

        <GlobalStyle />
      </div>
    );
  }
}
