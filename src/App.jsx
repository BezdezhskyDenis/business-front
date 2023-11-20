import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import SignUp from './components/signUp';
import CardManage from './components/cardManage';

import cardsService from "./services/cardsService";

cardsService.getAllCards().then();

function App() {


  return (
    <div className="App">
      <header className="pb-3">
        <NavBar />
      </header>
        <main className='flex-fill container mt-3'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
            <Routes>
            <Route path="/card-manager" element={<CardManage />} />
          </Routes>
        </main>
        <footer>
        <Footer />
      </footer>
      </div>
  );
}

export default App;
