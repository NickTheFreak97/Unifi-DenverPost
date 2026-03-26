import React, { useEffect } from "react"
import { useScreenWidth } from "./Context/Screen Size/UseScreenWidth";
import { useTheme } from "./components/theme/theme";


const App: React.FC = () => {
  const screenWidth = useScreenWidth();
  const theme = useTheme();

  useEffect(
    () => {
      console.log(theme)
    }, [theme]
  )

  return (
  <React.Fragment>
    <h1>
      {screenWidth}
    </h1>
  </React.Fragment>
  )
}

export default App;