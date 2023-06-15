import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      duration: '',
    };
  }
resetState = () => {
    this.setState({
     
        company: '',
        position: '',
        duration: ''
      
    });
  };

   setValues = (values) => {
    this.setState(values);
  };
  componentDidMount() {
    // Set the initial state based on the received props
    this.setState({ ...this.props.experienceInfo });
  }

  componentDidUpdate(prevProps) {
    // Check if the props have changed
    if (prevProps.generalInfo !== this.props.generalInfo) {
      // Update the component's state with the new props
      this.setState({ ...this.props.experiencelInfo });
    }
  }
  // handleInputChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value }, () => {
  //     const { company, position, duration } = this.state;
  //     this.props.handleFormSubmit({ company, position, duration });
  //   });
  // };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { company, position, duration } = this.state;

    return (
      <div>
        <h2>Experience</h2>
        
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={position}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={this.handleInputChange}
            />
          </label>
        
      </div>
    );
  }
}

export default Experience;
