import { useState } from 'react'
import './App.css'
import { getColleges } from './App';


function App() {
  let [clgList, setClgList] = useState([]);
  let [country, setCountry] = useState("");
  
  const handleSearch = (e) => {

    let all_colleges =  getColleges(country);         // it is an async function, so it returns Promise object, here all_colleges is Promise object
    // To get the PromiseResult or the value
    all_colleges.then( (required_clg_list) => {
      setClgList(required_clg_list);
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



// Second way using await keyword: 
  // let all_colleges = await getColleges(country);   
  // setClgList(all_colleges);
  // setCountry("");
  
