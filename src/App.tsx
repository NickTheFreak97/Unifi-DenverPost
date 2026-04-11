import React from "react"

import Header from './components/Header/Header';
import Subheader from "./components/Subheader/Subheader";
import Navbar from "./components/Navbar/Navbar"

import { useScreenWidth } from "./Context/Screen Size/UseScreenWidth";
import { Breakpoint } from "./Context/Screen Size/Breakpoint";

const App: React.FC = () => {

  const screenWidth = useScreenWidth()

  return (
  <React.Fragment>
    <header>
      <Header />
      { screenWidth >= Breakpoint.laptop && 
        <React.Fragment>
          <Subheader />
          <Navbar />
        </React.Fragment>
      }
    </header>
  </React.Fragment>
  )
}

export default App;