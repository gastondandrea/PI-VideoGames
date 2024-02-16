import {Routes, Route} from "react-router-dom";

import './App.css';
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import FormPage from './views/formPage/formPage';
import NavBar from "./component/navBar/navBar";
import {useLocation} from "react-router-dom";


function App() {
const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname!=='/' ? <NavBar/> : null}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </div>
  );
}

export default App;
