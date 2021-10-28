import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/add-user">
            <AddUser></AddUser>
          </Route>
          <Route exact path="/update-user">
            <UpdateUser></UpdateUser>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
