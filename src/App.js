import HomePage from './pages/homepage/homepage-component';
import {Switch, Route} from 'react-router-dom';
import Shop_Component from './pages/shop/shop-component';
import LoginPage from './pages/login/login-component';
import HeaderComponent from './components/header/header-component';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        {/*here only {HomePage} gets access to props of route and not its children, to solve issue we use withRouter() */}
        <Route path='/shop' component={Shop_Component}/> 
        <Route path='/login' component={LoginPage}/>
      </Switch>
    </div>
  ); 
} 

export default App; 
