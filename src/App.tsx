import React from "react"

import Header from './components/Website Header/Header/Header';
import Subheader from "./components/Website Header/Subheader/Subheader";
import Navbar from "./components/Website Header/Navbar/Navbar"

import { useScreenWidth } from "./Context/Screen Size/UseScreenWidth";
import { Breakpoint } from "./Context/Screen Size/Breakpoint";
import Trending from "./components/Website Header/Trending/Trending";
import PageShield from "./components/Page/Page Shield/PageShield";
import FeaturedDisplayCase from "./components/Page/Display Case/Featured/FeaturedDisplayCase";
import RecommendedFYP from "./components/Page/Display Case/Recommended/Recommended";
import Briefs from "./components/Page/Display Case/Section Brief/Briefs";
import Photos from "./components/Page/Display Case/Photos/Photos";
import QuickReads from "./components/Page/Display Case/Quick Reads/QuickReads";

const App: React.FC = () => {

  const screenWidth = useScreenWidth()
  const rangeOfQuickReads = (()=>{
    var keysInRange = []

    for(var i=0; i < 9; i++) {
      keysInRange.push(i)
    }

    return keysInRange
  })()

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
    <PageShield>
        <FeaturedDisplayCase />
        <RecommendedFYP />
        <Briefs />
        <Photos />
        <React.Fragment>
          {
            rangeOfQuickReads.map((sectionNumber) => {
              return (
                <QuickReads key={sectionNumber} />
              )
            })
          }
        </React.Fragment>
    </PageShield>
  </React.Fragment>
  )
}

export default App;