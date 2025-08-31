import { useState } from "react";
import Card from "./components/Card/Card";
import ThemeBtn from "./components/Theme/ThemeButton";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
        <div className="flex mx-auto"> 
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
        </div>
      </div>
    </div>  
    </ThemeContextProvider>
  )
}

export default App;
