import './App.css';
import NavBar from './components/navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import { useMode } from './contexts/mode.context';
// import { useMode } from './hooks/useMode';
function App() {
  const { mode, icon, handleModeChange} = useMode()
  // const { handleModeChange, mode, icon} = useMode()

  return (
    <div className="App">
     
      <div>
        <NavBar mode={mode} icon={icon} modeChange={()=>{handleModeChange()}}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
      </div>
    </div>
  );
}

export default App;
