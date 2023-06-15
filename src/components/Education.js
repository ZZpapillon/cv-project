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
resetState = () => {
    this.setState({
        institute: '',
        degree: '',
        graduationYear: ''
      
    });
  };

   setValues = (values) => {
    this.setState(values);
  };
  // componentDidMount() {
  //   // Set the initial state based on the received props
  //   this.setState({ ...this.props.generalInfo });
  // }

  // componentDidUpdate(prevProps) {
  //   // Check if the props have changed
  //   if (prevProps.generalInfo !== this.props.educationInfo) {
  //     // Update the component's state with the new props
  //     this.setState({ ...this.props.educationInfo });
  //   }
  // }

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
