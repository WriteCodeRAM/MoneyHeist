import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import trash from '../images/icons8-trash-can-64.png'
import UpdateMemberForm from "./UpdateMemberForm";


const CrewMember = () => {
    const [resource, setResource] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState(false)


    const {id} = useParams() 

    console.log(id)
  
    useEffect(() => {
        const fetchResource = async () => {
          const { data, error } = await supabase
            .from('Crew')
            .select('*')
            .eq('id',  id)
            .single();
      
          if (error) console.log('Error fetching resource:', error);
          if (data) setResource(data);
        };
      
        fetchResource();
      }, [id]);
      
      console.log(resource);

      const handleEdit = () => {
          setIsEditing(true);
      }

      const handleUpdate = async (updatedData) => {
          const { error } = await supabase
            .from('Crew')
            .update(updatedData)
            .eq('id', id);
          if (error) console.log('Error updating resource:', error);
          setIsEditing(false);
          setResource(updatedData);
      }

      const handleDelete = async (event) => {
       

        await supabase.from('Crew').delete().eq('id', id); 

        setMessage(true)
        setTimeout(() => {
            setMessage(false)
        }, 2000)
     }
      
      return (
        <div className="single-container">
          {resource ? (
            <>
              {isEditing ? (
                <UpdateMemberForm
                  initialData={resource}
                  handleUpdate={handleUpdate}
                  setIsEditing={setIsEditing}
                />
              ) : (
                <div className={`card ${resource.specialty}-bg`}>
                  <h1>{resource.codename}</h1>
                  <p>{resource.specialty}</p>
                  <div className="bottom-card">

                    <div className="">
                      <button onClick={handleEdit}>edit</button>
                    </div>
                      <img src={trash} onClick={handleDelete} className='trash' alt="" />

                  </div>
                     <p className="mercenary">{message ? 'Deleted Member' : '' }</p>
                </div>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}

export default CrewMember;
