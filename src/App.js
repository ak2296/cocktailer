import Tiles from "./Tiles"
import Drink from "./Drink"
import Form from "./Form"
import Favorites from "./Favorites"
import{BrowserRouter as Router ,Route, Switch} from 'react-router-dom';


function App() {


  return (
    //this Routes the pages that has to show
    //Switch controls the pages to show so not all of them are shown together
    <Router>
    <div className='container bg-light min-vh-100' >
      <div className='row justify-content-center py-2 bg-warning mb-5 mt-3 rounded-top'>
        <div className='col-12 text-center'>
      <h2 className='col fw-bold text-muted mb-0'>COCKTAILER</h2>
      <a className="col-2 d-inline" href="/Favorites" target="_self">
        <button type="button" className=" btn btn-warning float-end py-0 text-secondary fw-bold"> My Drinks</button>
      </a>
      </div>
      </div>
        <div className="row  justify-content-center  align-items-start min-vh-100">
          
          <Switch>
            <Route path='/' exact component={Form} />
            <Route path='/Tiles' component={Tiles} />
            <Route path='/Drink' component={Drink} />
            <Route path='/Favorites' component={Favorites} />
          </Switch>
        </div>

        <div className="row justify-content-center bg-secondary py-3 mb-3 rounded-bottom">
          <div className="col">
          <p className="text-center text-warning align-middle mb-0 fw-bold ">June 2021 - Group 16 - CHEERS!</p>
          </div>
        </div>
        
    </div>
    </Router>

)}

export default App;
