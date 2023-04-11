import { supabase } from '../client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import trash from '../images/icons8-trash-can-64 (1).png'



function Overview() {
    const [data, setData] = useState([]);
    const [missing, setMissing] = useState(['mercenary', 'driver', 'safecracker', 'planner', 'hacker', 'lookout'])

  
    useEffect(() => {
      async function fetchData() {
        const { data } = await supabase.from('Crew').select().order('created_at', { ascending: true });
        // if (error) console.log('Error fetching crew members:', error);
         setData(data);
         console.log(data)

         const dbSpecialty = data.map(result => result.specialty);

         console.log(dbSpecialty)

         const filteredArray = missing.filter(item => !dbSpecialty.includes(item));

        setMissing(filteredArray)

        for(let i = 0; i < data.length; i++){
            if(data[i].specialty == 'mercenary') return 
        }
      }
      fetchData();
    }, []);
  
     
    const handleDelete = async (event) => {
        console.log('test')

        await supabase.from('Crew').delete().eq('id', id); 
     }

    return (
      <div className='crew-container'>
        <h1><span>Crew</span> Members</h1>
       {missing.length !== 0 ? <p>Your crew could use a <span>{missing[0]}</span></p> : ''}
        <ul className='overview-container'>
          {data.map((member) =>   (

            
           <Link to={`/crew/${member.id}`} key={member.id}>
           <div className={`card ${member.specialty}`}>
  <div className="card-header">
    <h2 className="card-title">{member.codename}</h2>
  </div>
  <div className="card-body">
    <ul className="card-list">
      <li><strong>Specialty: </strong>{member.specialty}</li>
    </ul>


  </div>
</div>
      </Link>

          ))}
        </ul>
      </div>
    );
  }
  
  

  export default Overview