import React from "react"
import { useScreenWidth } from "./Context/Screen Size/UseScreenWidth";


const App: React.FC = () => {
  const screenWidth = useScreenWidth();


  return (
  <React.Fragment>
    <h1>
      {screenWidth}
    </h1>
  </React.Fragment>
  )
}

export default App;