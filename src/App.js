import './App.css';
import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {},
      educationInfo: {},
      experienceInfo: {},
    };
  }

  //  handleGeneralSubmit = (generalInfo) => {
  //   this.setState({ generalInfo });
  // };
handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const generalInfo = {
    fullName: formData.get('fullName'),
    photo: formData.get('photo'),
    title: formData.get('title'),
    describtion: formData.get('describtion'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  };

  const educationInfo = {
    institute: formData.get('institute'),
    degree: formData.get('degree'),
    graduationYear: formData.get('graduationYear'),
  };

  const experienceInfo = {
    company: formData.get('company'),
    position: formData.get('position'),
    duration: formData.get('duration'),
  };

  this.setState({
    generalInfo,
    educationInfo,
    experienceInfo,
  });
};

  

  render() {
    const { generalInfo, educationInfo, experienceInfo } = this.state;

    return (
      <div className="container">
        <div className="header">
          <div className='headerName'>CV-Maker</div>
        </div>
        <div className="content">
          <div className="inputSide">
           <form onSubmit={this.handleSubmit} >
             <General  />
            <Education  />
            <Experience  />

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="resultSide">
            <Results
              generalInfo={generalInfo}
              educationInfo={educationInfo}
              experienceInfo={experienceInfo}
            />
          </div>
        </div>
        <div className="footer">@Zdeslav Zaksek</div>
      </div>
    );
  }
}

export default App;

