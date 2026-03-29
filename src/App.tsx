import React from "react"
import { useTheme } from "./components/theme/theme";

import Header from './components/Header/Header';

const App: React.FC = () => {
  const theme = useTheme();

  return (
  <React.Fragment>
    <Header />
  </React.Fragment>
  )
}

export default App;