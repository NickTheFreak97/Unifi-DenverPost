import React from "react"

import Header from './components/Website Header/Header/Header';
import Subheader from "./components/Website Header/Subheader/Subheader";
import Navbar from "./components/Website Header/Navbar/Navbar"

import { useScreenWidth } from "./Context/Screen Size/UseScreenWidth";
import { Breakpoint } from "./Context/Screen Size/Breakpoint";
import Trending from "./components/Website Header/Trending/Trending";

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
          <Trending />
        </React.Fragment>
      }
    </header>
  </React.Fragment>
  )
}

export default App;