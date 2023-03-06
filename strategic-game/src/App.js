import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';

import Home from './components/Home';
//import Admin_header from './components/Partials/Admin-header';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDetails from './components/UserDetails';
import AboutUs  from './components/AboutUs';
import GameBook from './components/Admin_panel/GameBook'
//import Add_GameBook from './components/Admin_panel/Add_GameBook'
import GameBooks from './components/Admin_panel/GameBooks'

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div>
      <header>
   
        <Header />
      </header>
  
        <Routes>
          
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/gameBook" element={<GameBook/>} />
         
          <Route path="/gameBooks" element={<GameBooks/>} />
          </Routes>
       
         
    </div>
    </Router>
    
  );
}

export default App;