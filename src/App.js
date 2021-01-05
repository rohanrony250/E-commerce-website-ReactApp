import HomePage from './pages/homepage/homepage-component';
import {Route} from 'react-router-dom';

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
      <Route exact path component/>
    </div>
  );
} 

export default App; 
