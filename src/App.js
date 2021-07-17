import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CallList from './Components/CallList/CallList';
import * as api from './Api/AirCallApi';

function App() {

  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      api.authenticate();
    }
  }, []);



  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CallList} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
