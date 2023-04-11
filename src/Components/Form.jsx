import React, { useState } from 'react';
import singleMember from "../images/singleMember.jpeg";
import { supabase } from '../client'



function CrewForm() {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [message, setMessage] = useState(false)
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log(name, specialty);
    await supabase
    .from('Crew')
    .insert({codename: name, specialty: specialty})
    .select();

    setMessage(true)
    setTimeout(() => {
        setMessage(false)
    }, 3000)

    // window.location = "/";
    // Reset the form
    setName('');
    setSpecialty('');

  }

  const createMember = async (event) => {
    event.preventDefault();

   await supabase
    .from('Crew')
    .insert({codename: name, specialty: specialty})
    .select();

    window.location = "/";
}

  return (

    <form className='form-container' onSubmit={handleSubmit}>
        <img src={singleMember} alt="Single member" className="member-image" />

       {message ? <h1 className='message'>Member added successfully!</h1>  : <h1>Create a new member:</h1>} 
      <label>
        CodeName
        <input type="text" className='form-text-input' value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Specialty:
        <br />
        <label>
          <input type="radio" value="hacker" checked={specialty === 'hacker'} onChange={handleSpecialtyChange} />
          Hacker
        </label>
        <br />
        <label>
          <input type="radio" value="mercenary" checked={specialty === 'mercenary'} onChange={handleSpecialtyChange} />
          Mercenary
        </label>
        <br />
        <label>
          <input type="radio" value="safecracker" checked={specialty === 'safecracker'} onChange={handleSpecialtyChange} />
          Safecracker
        </label>
        <br />
        <label>
          <input type="radio" value="planner" checked={specialty === 'planner'} onChange={handleSpecialtyChange} />
          Planner
        </label>
        <br />
        <label>
          <input type="radio" value="driver" checked={specialty === 'driver'} onChange={handleSpecialtyChange} />
          Driver
        </label>
      </label>

      <label>
          <input type="radio" value="lookout" checked={specialty === 'lookout'} onChange={handleSpecialtyChange} />
        Lookout
        </label>
        <br />
      
      <input type="submit" value="Submit" />
    </form>


  );
}

export default CrewForm