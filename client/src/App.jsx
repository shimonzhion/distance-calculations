import { useState } from 'react'
import {setLocation, checkDistance} from './services/location-service'

import './App.css'

function App() {
  const [coordinates, setCoordinates ] = useState({lat:'', lng:''})
  const [coordinates2, setCoordinates2 ] = useState({lat:'', lng:''})
  const [message, setMessage]= useState(null)

  function getMessage(data) {
    return typeof data.distance === "undefined"
      ? data.message
      : `${data.message}: ${data.distance}`;
  }
  


  function handleSubmit(text){
    if(text === 'set'){
    setLocation(coordinates).then(data=>setMessage(data)).catch((error)=>setMessage(error))
    setCoordinates({lat:'', lng:''}) 
    setTimeout(()=>{
      setMessage(null)
     },2000)
    }
    else{
      checkDistance(coordinates2).then(data=>setMessage(getMessage(data))).catch((error)=>setMessage(error))
      setCoordinates2({lat:'', lng:''}) 
      setTimeout(()=>{
        setMessage(null)
       },2000)
    }

  }

  return (
    <div className='app'>
   
    <div className='setLocation container'>
    <h1>Set location</h1>
    <input type="text" name='lat' placeholder='lat' value={coordinates.lat} 
    onChange={(e) => setCoordinates(prev => ({ ...prev, [e.target.name]: e.target.value  }))} />
    <input type="text" name='lng' placeholder='lng'  value={coordinates.lng} 
     onChange={(e) => setCoordinates(prev => ({ ...prev, [e.target.name]: e.target.value  }))} />
    <button onClick={()=>handleSubmit('set')}>Set</button>
    </div>
      
  
    <div className='chack-locatins container'>
    <h1>Check location</h1>
    <input type="text"  name='lat' placeholder='lat' value={coordinates2.lat}
      onChange={(e) => setCoordinates2(prev => ({ ...prev, [e.target.name]: e.target.value  }))} />
    <input type="text" name='lng' placeholder='lng'  value={coordinates2.lng} 
      onChange={(e) => setCoordinates2(prev => ({ ...prev, [e.target.name]: e.target.value  }))} />
    <button onClick={()=>handleSubmit()}>Check</button>
    </div>
    {message && <h2>{message}</h2>}
    </div>
  )
}

export default App
