import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institute: '',
      degree: '',
      graduationYear: '',
    };
  }

//   handleInputChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value }, () => {
     
//         const { institute, degree, graduationYear } = this.state;
//       this.props.handleFormSubmit({ institute, degree, graduationYear });
    
//     });
//   };

handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };



  render() {
    const {  institute, degree, graduationYear } = this.state;

    return (
      <div>
        <h2>Education</h2>
        
          <label>
            Institute:
            <input
              type="text"
              name="institute"
              value={institute}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={degree}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Graduation:
            <input
              type="text"
              name="graduationYear"
              value={graduationYear}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
      </div>
    );
  }
}

export default Education;
