
import './App.css';
import MainPage from './components/MainPage';
import Nav from './components/Nav';
import { ContextController } from './Context';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Details from './components/Details';





function App() {
  return (
    <ContextController>
      <Nav/>
     <Router>
      <div>
        <Route  path='/details/:id' component={Details}/>
        <Route exact path='/' component={MainPage}/>
      </div>
     </Router>
    </ContextController>
  );
}

export default App;
