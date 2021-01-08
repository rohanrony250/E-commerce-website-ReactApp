import HomePage from './pages/homepage/homepage-component';
import {Switch, Route} from 'react-router-dom';
import Shop_Component from './pages/shop/shop-component'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        {/*here only {HomePage} gets access to props of route and not its children, to solve issue we use withRouter() */}
        <Route path='/shop' component={Shop_Component}/>  
      </Switch>
    </div>
  ); 
} 

export default App; 
