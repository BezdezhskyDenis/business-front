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
import CardCreate from './components/cardsCreate';
import CardDelete from './components/cardDelete';
import FavCards from './components/favCards';
import PageAlert from './components/common/alert';
import { useAlert } from './contexts/alert.context';
import BusinessCardPage from './components/businessCard';
import About from './components/about';

cardsService.getAllCards().then();

function App() {
  const { alert, alertType } = useAlert();

  return (
    <div className="App">
      <header className="pb-3 sticky-top">
        <NavBar />
        {alert && <PageAlert  />}
      </header>
        <main className='flex-fill container mt-3'>
          <Routes>
            <Route path="/" element={<Home headTitle="Welcome"/>} />
            <Route path="/about" element={<About headTitle="About"/>} />
            <Route path="/sign-in" element={<SignIn redirect="/" headTitle="SignIn"/>} />
            <Route path="/sign-up" element={<SignUp redirect="/sign-in" headTitle="Registration"/>}/>
            <Route path="/sign-out" element={<SignOut  redirect="/" />} />
            <Route path="/my-cards/edit/:id" element={<CardManage  headTitle="Card Manage" redirect="/my-cards"/>}/>
            <Route path="/card/:id" element={<BusinessCardPage redirect="/"/>}/>
            <Route path="/my-cards/delete/:id/:bizNumber" element={<CardDelete/>}/>
            <Route path="/new-card" element={<CardCreate  headTitle="Make New Card" redirect="/my-cards"/>}/>
            <Route path="/my-cards" element={<MyCards headTitle="My Cards"/>} />
            <Route path="/fav-cards" element={<FavCards headTitle="Favorites Cards"/>} />
          </Routes>
        </main>
        <footer>
        <Footer />
      </footer>
      </div>
  );
}

export default App;
