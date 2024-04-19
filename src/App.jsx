import "./assets/css/page-animation.css"
import "./assets/css/style.css"
import {BrowserRouter as Router} from "react-router-dom";
import RouterLink from "./router/router.jsx";
import GlobalStyle from "./utils/GlobalStyle";

function App() {


  return (
      <>
      <Router>
          <RouterLink />

      </Router>
          <GlobalStyle />
      </>
  )
}

export default App
