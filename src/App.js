
import Axios from 'axios';
import  { useState } from 'react';
import Tiles from "./Tiles"
import Drink from "./Drink"
import{BrowserRouter as Router ,Route} from 'react-router-dom';

function App() {
  
  const[query, setquery]=useState("")
  const [drinks, setdrinks] = useState([])
  const [searchType, setsearchType] = useState('')

  var url= `https://www.thecocktaildb.com/api/json/v1/1/${searchType}=${query}`
  async function getDrinks(){
    let result= await Axios.get(url);
    setdrinks(result.data.drinks);
  }

  const submit = (e)=>{
    e.preventDefault();
    getDrinks();
  }

  return (
    
    <div className='container bg-light ' >
      <div className='row justify-content-center py-3 bg-warning mb-5 mt-3'>
      <h2 className='col text-center fw-bold text-muted'>COCKTAILER</h2>
      </div>

    <form className='row  justify-content-center ' onSubmit={submit}>
        <div className="col-10 col-md-6 ">
            <input
            type="text" className="form-control mb-3" 
            placeholder="Search for a drink..." 
            value={query} onChange={(e)=> setquery(e.target.value)}/>
        </div>
        <div className="col-10 col-md-2 text-center">
            <button type="submit" className="container-fluid btn btn-secondary mb-3 ">Search</button>
        </div>
          <div className="col-10 col-md-2">
          <div className="form-check ">
            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setsearchType('search.php?s')}/>
            <label className="form-check-label " htmlFor="flexRadioDefault1">
              Name
            </label>
            </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onSelect={()=>setsearchType('filter.php?i')}/>
            <label className="form-check-label " htmlFor="flexRadioDefault2">
              Ingredients
            </label>
            </div>
        </div>
    </form>

        <div className="container min-vh-100">
          <div className="row  justify-content-center">
            {drinks.map(drink => {
              return <Tiles key={drink['idDrink']} drink= {drink} />;
            })}
          </div>
          <Router>
          <div className="row  justify-content-center">
           <Route path='/Drink' component={Drink} />
          </div>
          </Router>
        </div>
        <div className="row justify-content-center bg-secondary py-3">
          <div className="col">
          <p className="text-center text-warning align-middle mb-0 fw-bold">June 2021 - Group 16</p>
        </div>
        </div>
      </div>

)}

export default App;
