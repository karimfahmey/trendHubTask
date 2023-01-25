import React from "react";
import { useTranslation } from 'react-i18next'
import NavBar from "./components/navbar/Navbar";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
