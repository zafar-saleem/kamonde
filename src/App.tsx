import Navigation from "./components/navigation";
import { Routes } from "./routes";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import * as Styled from "./app.styled";

function App() {
  return (
    <Router>
      <Navigation />
      <Styled.Main>
        <Routes />
      </Styled.Main>
    </Router>
  )
}

export default App
