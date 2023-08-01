import React from 'react';
import { connect } from 'react-redux';
import { updateContactsTitle, incrementCounter, decrementCounter } from '../../redux/actions';

class MainPage extends React.Component {
  handleInputChange = (e) => {
    const newTitle = e.target.value;
    this.props.updateContactsTitle(newTitle);
  };

  handleIncrement = () => {
    this.props.incrementCounter();
  };

  handleDecrement = () => {
    this.props.decrementCounter();
  };

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <input
          type="text"
          value={this.props.contactsTitle}
          onChange={this.handleInputChange}
        />
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactsTitle: state.contactsTitle,
    counter: state.counter,
  };
};

export default connect(mapStateToProps, {
  updateContactsTitle,
  incrementCounter,
  decrementCounter,
})(MainPage);
