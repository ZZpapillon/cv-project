import React, { Component } from 'react';
import './result.css'
class Results extends Component {

  render() {
    const { generalInfo, educationInfo, experienceInfo } = this.props;
    
    return (
      <div className='container2'>
        <div className='resultHeader'>
              <div className='fullname'> {generalInfo.fullName}</div>
             <div className='title'>{generalInfo.title}</div>
        </div>
        <div className='resultContent'>
          <h4>Describtion</h4>
          <div>{generalInfo.describtion}</div>
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
        <div className='photoR'>
         
          
         {generalInfo.photo && (
        <div>
         
          <img src={URL.createObjectURL(generalInfo.photo)} alt="Uploaded" />
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
      
      </div>
    );
  }
}

export default Results;

