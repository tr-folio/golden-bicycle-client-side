import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
    return (
        <div className="App">
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/explore">
                            <Explore></Explore>
                        </Route>
                        <Route path="/purchase/:id">
                            <Purchase></Purchase>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                </Router>
        </div>
    );
}

export default App;
