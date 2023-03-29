import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';

import Home from './components/Home';
//import Admin_header from './components/Partials/Admin-header';
import Header from './components/Header';
//import Admin_header from './components/Partials/Admin-header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDetails from './components/UserDetails';
import AboutUs  from './components/AboutUs';
import GameBook from './components/Admin_panel/GameBook'
//import Add_GameBook from './components/Admin_panel/Add_GameBook'
import GameBooks from './components/Admin_panel/GameBooks';
import AddBook from './components/Admin_panel/Add_GameBook';
import BookDetail from "./components/Admin_panel/BookDetails";
import UserHome from './components/UserHome';
import GameSets from './components/Admin_panel/GameSets';
import GameSet from './components/Admin_panel/GameSet';
import AddGameSet from './components/Admin_panel/Add_GameSet';
import AddLocationForm from './components/Admin_panel/StoreLocation';

// local user 
import UserHeader from "./components/User-header";
import UserGameBooks from './components/User_panel/UserGameBooks';
import UserStoreLocation from './components/User_panel/userStoreLocation';


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      
      <div>
    

  
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
          <Route path="/addGameBook" element={<AddBook/>} />
          <Route path="/gamebooks/:id" element={<BookDetail />} exact />
          <Route path="/UserHome" element={<UserHome/>} />
          <Route path="/gameSet" element={<GameSet/>} /> 
          <Route path="/gameSets" element={<GameSets/>} />
          <Route path="/addGameSet" element={<AddGameSet/>} />

          <Route path="/userHeader" element={<UserHeader/>} />
          <Route path="/UserGameBooks" element={<UserGameBooks/>} />
          <Route path="/StoreLocation" element={<AddLocationForm/>} />
          <Route path="/userStoreLocation" element={<UserStoreLocation/>} />
         
         
          </Routes>
       
         
    </div>
    </Router>
    
  );
}

export default App;