import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDetails from './components/UserDetails';

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
          </Routes>
       
         
    </div>
    </Router>
    
  );
}

export default App;