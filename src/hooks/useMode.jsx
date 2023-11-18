import { useState } from "react";

export const useMode = () =>{
    const [mode, setMode] = useState("light"); //State about dark-mode
    const [icon, setIcon] = useState(<i className="bi bi-moon-fill"></i>)
    const handleModeChange = () => {
      if (mode === "light") {
        setMode("dark");
        setIcon(<i class="bi bi-brightness-high-fill"></i>);
        document.body.style.backgroundColor = "#050122"; //'#042743'
      } else {
        setMode("light");
        setIcon(<i className="bi bi-moon-fill"></i>);
        document.body.style.backgroundColor = "white";
      }
    }
  
    return {handleModeChange:()=>{handleModeChange()}, mode, icon}
}