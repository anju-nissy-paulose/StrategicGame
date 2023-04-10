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
//import GameBook from './components/Admin_panel/GameBook'
//import Add_GameBook from './components/Admin_panel/Add_GameBook'
import GameBooks from './components/Admin_panel/GameBooks';
import AddBook from './components/Admin_panel/Add_GameBook';
import BookDetail from "./components/Admin_panel/BookDetails";
import BookView from "./components/Admin_panel/View_GameBooks"
import UserHome from './components/UserHome';
import GameSets from './components/Admin_panel/GameSets';

import AddGameSet from './components/Admin_panel/Add_GameSet';
import AddLocationForm from './components/Admin_panel/StoreLocation';

// local user 
import UserHeader from "./components/User-header";
import UserGameBooks from './components/User_panel/UserGameBooks';
import UserStoreLocation from './components/StoreLocation';
import UserBook from './components/User_panel/UserGameBook';
import UserGameSets from './components/User_panel/UserGameSets';
import Tutorial from './components/User_panel/Tutorial';
import TutorialSubPage from './components/User_panel/Tutorial_subpage'
import GameSetProduct from './components/User_panel/GameSetProduct';
import AddToCartForm from './components/User_panel/AddToCart';
import AddToWishlist from './components/User_panel/WishList';
import  UserWishlist from './components/UserWishList';
import CheckoutForm from './components/User_panel/CheckoutForm';
import StripeForm from './components/StripeForm';

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
          
          <Route path="/gameBooks" element={<GameBooks/>} />
          <Route path="/addGameBook" element={<AddBook/>} />
          <Route path="/gamebooks/:id" element={<BookDetail />} exact />
          <Route path="/viewGameBook" element={<BookView/>} />

          <Route path="/UserHome" element={<UserHome/>} />
        
          <Route path="/gameSets" element={<GameSets/>} />
          <Route path="/addGameSet" element={<AddGameSet/>} />

          <Route path="/userHeader" element={<UserHeader/>} />
          <Route path="/UserGameBooks" element={<UserGameBooks/>} />
          <Route path="/UserGameSets" element={<UserGameSets/>} />
          <Route path="/UserBook" element={<UserBook/>} />
          <Route path="/StoreLocation" element={<AddLocationForm/>} />
          <Route path="/userStoreLocation" element={<UserStoreLocation/>} />
          <Route path="/Tutorial" element={<Tutorial/>} />
          <Route path="/Tutorialpage" element={<TutorialSubPage/>} />
          <Route exact path="/products/:id" component={GameSetProduct} />
          <Route exact path="/Mycart" component={AddToCartForm} />
          <Route exact path="/WishList" element={<AddToWishlist/>} />
          <Route exact path="/UserWishList" element={<UserWishlist/>} />
          <Route exact path="/CheckoutForm" element={<CheckoutForm/>} />
          <Route exact path="/StripeForm" element={<StripeForm/>} />
          
          
         
         
          </Routes>
       
         
    </div>
    </Router>
    
  );
}

export default App;