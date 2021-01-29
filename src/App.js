import React from 'react';
import HomePage from './pages/homepage/homepage-component';
import {Switch, Route} from 'react-router-dom';
import Shop_Component from './pages/shop/shop-component';
import LoginPage from './pages/login/login-component';
import HeaderComponent from './components/header/header-component';
import { auth, createUserProfileDocument} from './Firebase/firebase-utils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component
{
  
  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      const { setCurrentUser } = this.props;
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()

            
          },()=>{
            console.log(this.state)
          })

          
        })
      }

      else
      {
        setCurrentUser(userAuth)
      }
      
      //createUserProfileDocument(user);
      // this.setState({ currentUser : user })
      // console.log(user);

    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      <div>
        <HeaderComponent  />
        <Switch>
          <Route exact path='/' component={HomePage}/> 
          {/*here only {HomePage} gets access to props of route and not its children, to solve issue we use withRouter() */}
          <Route path='/shop' component={Shop_Component}/> 
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </div>
    ); 
  }
} 

const mapDispatchToProps = dispatch =>
(
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(null, mapDispatchToProps)(App); 
