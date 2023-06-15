import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      photo: null,
      title: '',
      descrpiption: '',
      email: '',
      phone: '',
      address: '',
    };
  }
 resetState = () => {
    this.setState({
      fullName: '',
      photo: null,
      title: '',
      description: '',
      email: '',
      phone: '',
      address: ''
    });
  };
   setValues = (values) => {
    this.setState(values);
  };

//  componentDidMount() {
//     // Set the initial state based on the received props
//     this.setState({ ...this.props.generalInfo });
//   }

//   componentDidUpdate(prevProps) {
//     // Check if the props have changed
//     if (prevProps.generalInfo !== this.props.generalInfo) {
//       // Update the component's state with the new props
//       this.setState({ ...this.props.generalInfo });
//     }
//   }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleFileChange = (event) => {
    this.setState({ photo: event.target.files[0] });
  };

  render() {
    const { fullName, title, description, email, phone, address } = this.state;

    return (
      <>
        <h2>General Information</h2>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Photo:
          <input
            type="file"
            name="photo"
            onChange={this.handleFileChange}
          />
        </label>
         <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleInputChange}
          />
        </label>
      </>
    );
  }
}

export default General;

