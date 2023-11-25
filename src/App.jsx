import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import SignUp from './components/signUp';
<<<<<<< HEAD
import SignIn from './components/signIn';
import CardManage from './components/cardManage';
import SignOut from './components/signout';
=======
import CardManage from './components/cardManage';

>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
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
<<<<<<< HEAD
          
          <Route path="/sign-in" element={<SignIn redirect="/" />} />
            <Route path="/sign-up" element={<SignUp redirect="/"/>} />
            <Route path="/sign-out" element={<SignOut />} redirect="/" />
=======
          </Routes>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
            <Routes>
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
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
