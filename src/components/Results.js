import React, { Component } from 'react';
import './result.css'
import johndoe from './johndoe.webp'
class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        fullName: 'John Doe',
        title: 'Web Developer',
        description: 'Experienced web developer with expertise in JavaScript, HTML, and CSS.',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main Street, City, Country',
        photo: null
      },
      educationInfo: {
        institute: 'University of Example',
        degree: 'Bachelor of Science',
        graduationYear: '2022'
      },
      experienceInfo: {
        company: 'ABC Company',
        position: 'Senior Web Developer',
        duration: '2018 - Present'
      },
       photoUrl: johndoe
    };
  }
  componentDidMount() {
    const { generalInfo } = this.state;
    if (generalInfo.photo) {
      const photoUrl = URL.createObjectURL(generalInfo.photo);
      this.setState({ photoUrl });
    }
    // Call setValues method with the initial values
    
   
  }

    componentDidUpdate(prevProps) {
    // Check if the props have changed
    if (prevProps.generalInfo !== this.props.generalInfo ||
        prevProps.educationInfo !== this.props.educationInfo ||
        prevProps.experienceInfo !== this.props.experienceInfo) {
      // Update the component's state with the new props
      this.setState({
        generalInfo: this.props.generalInfo,
        educationInfo: this.props.educationInfo,
        experienceInfo: this.props.experienceInfo
      });
    }
  }
handleEdit = () => {
  const { generalInfo, educationInfo, experienceInfo,} = this.props;
  const initialValues = {
    generalInfo: this.state.generalInfo,
    educationInfo: this.state.educationInfo,
    experienceInfo: this.state.experienceInfo,
  
  };
  this.props.onEdit(initialValues, generalInfo, educationInfo, experienceInfo);
};


  render() {
    const { generalInfo, educationInfo, experienceInfo, photoUrl } = this.state;
    
    return (
      <div className='container2'>
        <div className='resultHeader'>
              <div className='fullname'> {generalInfo.fullName}</div>
             <div className='title'>{generalInfo.title}</div>
        </div>
        <div className='resultContent'>
          <h4>Describtion</h4>
          <div>{generalInfo.description}</div>
           <h4>Experience</h4>
          <div className='experience'>
        <div className='company'>{experienceInfo.company}</div>
        <div className='position'>{experienceInfo.position}</div>
        <div className='duration'>{experienceInfo.duration}</div>
        </div>
          <h4>Education</h4>
        <div className='education'>
        <div className='school'>{educationInfo.institute}</div>
        <div className='degree'>Degree: {educationInfo.degree}</div>
        <div className='year'>{educationInfo.graduationYear}</div>
        </div>

        </div>
       <div className='photo'>
       <div className="photoR">
            {generalInfo.photo && (
              <div>
                <img src={URL.createObjectURL(generalInfo.photo)} alt="Uploaded" />
              </div>
            )}
            {!generalInfo.photo && (
              <div>
                <img src={photoUrl} alt="Default" />
              </div>
            )}
          </div>
        <h4>Personal Details</h4>
        <h5>Email</h5>
        <p>{generalInfo.email}</p>
        <h5>Phone</h5>
        <p>{generalInfo.phone}</p>
        <h5>Address</h5>
        <p>{generalInfo.address}</p>
        </div>
       <button className="edit" onClick={this.handleEdit}>Edit</button>

      </div>
    );
  }
}

export default Results;

