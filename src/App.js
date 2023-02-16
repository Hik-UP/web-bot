import './App.css';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './component/Navbar';

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Loggedin } from "./pages/Loggedin"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div style={{}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/loggedin" element={<Loggedin/>} />
        </Routes>
      </div>
    </>
    
    /*<Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>*/
  );
}

export default App;
