import Axios from 'axios';
import { useState } from 'react';
import Tiles from "./Tiles"

function App() {
  const[query, setquery]=useState("")
  const [drinks, setdrinks] = useState([])
  var url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  async function getDrinks(){
    let result= await Axios.get(url);
    setdrinks(result.data.drinks);
    console.log(result.data);
  }

  const submit = (e)=>{
    e.preventDefault();
    getDrinks();
  }

  return (
    <div className='container'>
      <div className='row justify-content-md-center py-3'>
      <h2 className='col text-center' onClick={getDrinks}>Cocktailer</h2>
      </div>
      <div className="row  justify-content-center">
        <div className="col-lg-6">
        <form className='input-group' onSubmit={submit}>
          <input 
          type="text" className="form-control mb-3" 
          placeholder="Search for a drink..." 
          value={query} onChange={(e)=> setquery(e.target.value)}/>
          <button type="submit" className="btn btn-primary mb-3">search</button>
        </form>
        </div>
        </div>
      <div>
        {drinks.map(drink => {
          return <Tiles drink= {drink} />;
        })}
      </div>
    </div>
    
)}

export default App;
