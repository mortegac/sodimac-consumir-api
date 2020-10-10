import React, {useState, useEffect } from 'react';
import './App.css';
import  InfoUser from './components/InfoUser.js';
function App() {

  const [ users, setUsers ] = useState([]);


  const fetchData = async ()=>{

    console.log('--fetchData--');
    const url = 'https://reqres.in/api/users?per_page=20';
    const additionalSetting = {
      "header": {
        "method": "GET",
        "Content-type": "application/json",
        // body : JSON.stringyfi(datos )
      }
    };

    const res = await fetch( url, additionalSetting) 
    const json = await res.json();
    const data = json.data;
    console.log('--data--', data);

    setUsers(data);

  }

  useEffect( ()=>{

    // Se llama despúes de cada renderizado

    fetchData();

  return ()=> console.log('desmontado')
  }, [])

console.log('--users-', users);
  return (
    <div className="App">
      <header className="App-header">
        
        {/* { JSON.stringify(users) } */}


      {
        users.map( (item, index)=>{

          return(
            
           <InfoUser 
                avatar={ `${item.avatar}` }
                name={ `${item.first_name} ${item.last_name}` }
                email={ `${item.email} ` }
              />

          )

        })


      }
      </header>
    </div>
  );
}

export default App;
