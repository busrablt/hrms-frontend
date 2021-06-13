import './App.css';
import Navi from "./layout/Navi"
import Footer from "./layout/Footer";
import Dashboard from './layout/Dashboard';
import {Container} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'


import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
