import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: 'Name Surname',
    number: '+380',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    // console.log(event.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor="ContactPhoneNumberInput">
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleInputChange}
            id="ContactPhoneNumberInput"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
