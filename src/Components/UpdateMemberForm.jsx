import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const UpdateMemberForm = (props) => {
  const [name, setName] = useState(props.resource ? props.resource.codename : '');
  const [specialty, setSpecialty] = useState(props.resource ? props.resource.specialty : '');
  const [message, setMessage] = useState(false);

  const {id} = useParams()


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Crew")
        .update({ codename: name, specialty: specialty })
        .eq("id", id);
      if (error) throw error;
      console.log("Data updated:", data);
      setMessage(true);
      setName("");
      setSpecialty("");
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  return (
    <form className='single-form-container' onSubmit={handleSubmit}>


      {message ? (
        <h1 className="message">Member updated successfully!</h1>
      ) : (
        <h1>Update member:</h1>
      )}
      <label>
        CodeName
        <input
          type="text"
          className="form-text-input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Specialty:
        <br />
        <label>
          <input
            type="radio"
            value="hacker"
            checked={specialty === "hacker"}
            onChange={handleSpecialtyChange}
          />
          Hacker
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="mercenary"
            checked={specialty === "mercenary"}
            onChange={handleSpecialtyChange}
          />
          Mercenary
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="safecracker"
            checked={specialty === "safecracker"}
            onChange={handleSpecialtyChange}
          />
          Safecracker
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="planner"
            checked={specialty === "planner"}
            onChange={handleSpecialtyChange}
          />
          Planner
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="driver"
            checked={specialty === "driver"}
            onChange={handleSpecialtyChange}
          />
          Driver
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="lookout"
            checked={specialty === "lookout"}
            onChange={handleSpecialtyChange}
          />
          Lookout
        </label>
        <br />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default UpdateMemberForm;
