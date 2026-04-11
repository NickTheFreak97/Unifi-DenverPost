import React from "react"
import { useTheme } from "./components/theme/theme";

import Header from './components/Header/Header';
import Subheader from "./components/Subheader/Subheader";
import Navbar from "./components/Navbar/Navbar"


const App: React.FC = () => {
  const theme = useTheme();

  return (
  <React.Fragment>
    <Header />
    <Subheader />
    <Navbar />
  </React.Fragment>
  )
}

export default App;