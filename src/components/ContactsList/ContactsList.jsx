import React from 'react';
import PropTypes from 'prop-types';
import { DeleteContactButton, ContactsContainer, ContactsData } from './ContactsList.styled';


export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsContainer>
      {contacts.map(({ name, number, id }) => (
        <ContactsData key={id} className="ContactsList__item">
          {name}: {number}
          <DeleteContactButton
            type="button"
            className="ContactDelete__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </DeleteContactButton>
        </ContactsData>
      ))}
    </ContactsContainer>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ contact: PropTypes.object }))
    .isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
