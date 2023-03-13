import React from 'react';
import PropTypes from 'prop-types';
import { DeleteContactButton } from './ContactsList.styled';


export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactsList">
      {contacts.map(({ name, number, id }) => (
        <li key={id} className="ContactsList__item">
          {name}: {number}
          <DeleteContactButton
            type="button"
            className="ContactDelete__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </DeleteContactButton>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ contact: PropTypes.object }))
    .isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
