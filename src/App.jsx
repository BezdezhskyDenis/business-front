import './App.css';
import NavBar from './components/navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';

function App() {


  return (
    <div className="App">
     <div ></div>
      <div>
        <NavBar/>
        <main className='flex-fill container mt-3'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
      </div>
    </div>
  );
}

export default App;
