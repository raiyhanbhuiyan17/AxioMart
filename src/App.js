import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter,Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <Routes>
          <Route path='/checkout'element={
            <>
             <Header/>
             <Checkout/>
             
            </>
           } 
           />
          <Route path='/' element={
            <>
              <Header/>
              <Home/>
            </>
          } 
          />
          <Route path='/login' element={
            <>
              <Header/>
              <Login/>
            </>
          } 
          />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
