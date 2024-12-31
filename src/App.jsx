import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getColleges } from './App';


function App() {
  let [clgList, setClgList] = useState([]);
  let [country, setCountry] = useState("");
  
  const handleSearch = (e) => {

    let val =  getColleges(country);         // it is an async function, so promise obj returns
    val.then( (res) => {
      setClgList(res);
      setCountry("");
    });

  }
  
  return (
    <>
    <input type="text" placeholder='Enter country name: ' value={country} name='country' onChange={(e) => setCountry(e.target.value)} />
    <button onClick={handleSearch}>Search colleges</button>
    <ol id='result'>
      {
        clgList.map((college,index) => <li key={index}>{college}</li>)
      }
    </ol>

    </>
  )
}

export default App
