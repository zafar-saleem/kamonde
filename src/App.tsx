import Navigation from "./components/Navigation";
import { Routes } from "./routes";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import * as Styled from "./app.styled";

function App() {
  return (
    <Router>
      <Styled.Main>
        <Navigation />
        <Routes />
      </Styled.Main>
    </Router>
  )
}

export default App
