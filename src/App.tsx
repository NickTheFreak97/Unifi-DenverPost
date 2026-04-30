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
import Events from "./components/Page/Display Case/Events/Events";
import DenverPostFooter from "./components/Footer/DenverPostFooter";

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
      <h1 className="visually-hidden">The Denver Post</h1>
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
        <ul id="quick-reads-list" role="list">
          {
            rangeOfQuickReads.map((sectionNumber) => {
              return (
                <li key={sectionNumber}><QuickReads/></li>
              )
            })
          }
        </ul>
        <Events/>
    </PageShield>
    <DenverPostFooter />
  </React.Fragment>
  )
}

export default App;