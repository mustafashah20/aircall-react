import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CallList from './Components/CallList/CallList';
import * as api from './Api/AirCallApi';
import CallDetails from './Components/CallDetails/CallDetails';

function App() {

  useEffect(() => {
    api.authenticate();
  }, []);



  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CallList} />
            <Route exact path="/calldeatils" component={CallDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
