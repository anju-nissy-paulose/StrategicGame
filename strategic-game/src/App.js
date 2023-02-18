import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Header />} />
          </Routes>
         
    </div>
    </Router>
    
  );
}

export default App;
