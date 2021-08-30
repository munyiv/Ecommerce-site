import './App.css';
import "./key";
import Axios from "axios";
import {useState} from "react"

function App() {
  const[query, setquery] = useState()
  
  const YOUR_APP_ID ="bb000b7e";
  const YOUR_APP_KEY = "4bd2c25fc6a74f794b9618a575d8a67f";
  var url =  `"https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free"`;

async function getRecipe(){
  var result=await Axios.get(url);
  console.log(result.data)

  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipe();
  }


  return (
    <div className="app">
     <h1 >Hello Welcome to my site</h1>
     <form className="appSearchForm" onSubmit={onSubmit}>
       <input type="text" 
       className="appInput"
       placeholder="Enter your item" value={query} onChange={(e)=>setquery(e.target.value)}/>
       <input className="appSearch"type="submit" value="Search"/>
     </form>
     
       
    </div>
  );
}

export default App;
