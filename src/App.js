import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CallList from './Components/CallList/CallList';

function App() {
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
