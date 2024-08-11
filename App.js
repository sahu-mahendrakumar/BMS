import './App.css';
import Home from './Home/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
//import MovieList from './Pages/Admin/MovieList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element = {
            <ProtectedRoute>
              <Home /> 
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          } />
          {/* <Route path="users/login" element  = {<Login /> } /> */}
          <Route path="/" element  = {<Login /> } />
       </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
