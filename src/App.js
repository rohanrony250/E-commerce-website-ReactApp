import HomePage from './pages/homepage/homepage-component';
import {Switch, Route} from 'react-router-dom';

import './App.css';


const HatsPage = () =>
(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        {/*here only {HomePage} gets access to props of route and not its children, to solve issue we use withRouter() */}
        <Route path='/hats' component={HatsPage}/>  
      </Switch>
    </div>
  ); 
} 

export default App; 
