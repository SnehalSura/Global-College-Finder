import axios from 'axios';

let url = "http://universities.hipolabs.com/search?name=";

async function getColleges(value){
    
    let clgList = [];
    try{
        if(value === ""){
            throw("Please enter the country name");
        }
        let response = await axios.get(url+value);        // returns the promise result
        console.log("Response for the country: ",response);
        let clgArr = response.data;

        for(let clg of clgArr){
            clgList.push(clg.name);
        }
    }
    catch(e){
        console.log("Error = ",e);
        clgList.push("Please enter the country name");
    }
    
    return clgList;

}


export {getColleges};