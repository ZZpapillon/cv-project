import './App.css';
import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Results from './components/Results';
import logo from './logo.webp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {},
      educationInfo: {},
      experienceInfo: {},
      editMode: false,
      
    };
    
  }
  
 handleEdit = (initialValues, generalInfo, educationInfo, experienceInfo) => {
  // Use the initial values and other data as needed
  this.setState({
    generalInfo,
    educationInfo,
    experienceInfo,
  });
  this.generalComponent.setValues(initialValues.generalInfo);
  this.educationComponent.setValues(initialValues.educationInfo);
  this.experienceComponent.setValues(initialValues.experienceInfo);
  this.setState({ editMode: true });
};


  
  
handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const generalInfo = {
    fullName: formData.get('fullName'),
    photo: formData.get('photo'),
    title: formData.get('title'),
    description: formData.get('description'),
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

  this.generalComponent.resetState();
  this.educationComponent.resetState();
  this.experienceComponent.resetState();
};

  

  render() {
    const { generalInfo, educationInfo, experienceInfo, editMode } = this.state;

    return (
      <div className="container">
        <div className="header">
          <div className='headerName'>CV-Maker</div>
          <div className='headerLogo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="content">
          <div className="inputSide">
           <form onSubmit={this.handleSubmit} >
             <General  ref={(ref) => (this.generalComponent = ref)} />
            <Education  ref={(ref) => (this.educationComponent = ref)}/>
            <Experience  ref={(ref) => (this.experienceComponent = ref)}/>

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="resultSide">
            <Results
              generalInfo={generalInfo}
              educationInfo={educationInfo}
              experienceInfo={experienceInfo}
              onEdit={this.handleEdit}
              editMode={editMode}
              
              

            />
          </div>
        </div>
        <div className="footer">@Zdeslav Zaksek</div>
      </div>
    );
  }
}

export default App;

