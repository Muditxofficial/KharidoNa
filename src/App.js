
import './App.css';
import MainPage from './components/MainPage';
import Nav from './components/Nav';
import { ContextController } from './Context';
import {BrowserRouter as Router} from 'react-router-dom'




function App() {
  return (
    <ContextController>
      <Nav/>
     <Router>
      <div>
        <MainPage/>
      </div>
     </Router>
    </ContextController>
  );
}

export default App;
