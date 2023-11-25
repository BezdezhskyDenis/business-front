import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import CardManage from './components/cardManage';
import SignOut from './components/signout';
import cardsService from "./services/cardsService";
import MyCards from './components/myCards';

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
          
          <Route path="/sign-in" element={<SignIn redirect="/" />} />
            <Route path="/sign-up" element={<SignUp redirect="/"/>} />
            <Route path="/sign-out" element={<SignOut />} redirect="/" />
            <Route path="/card-manager" element={<CardManage />} />
            <Route path="/my-cards" element={<MyCards />} />
          </Routes>
        </main>
        <footer>
        <Footer />
      </footer>
      </div>
  );
}

export default App;
