import {Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import FormPage from './views/formPage/formPage';
import NavBar from "./component/navBar/navBar";
import Alert from "./component/alert/alert";
import {hideAlert} from "./redux/actions/actions"
import {useLocation} from "react-router-dom";


function App() {
const {pathname} = useLocation();
const alertMessage = useSelector(state => state.message);
const dispatch = useDispatch();

  return (
    <div className="App">
      {pathname!=='/' ? <NavBar/> : null}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
      {alertMessage && (
                <Alert
                    message={alertMessage}
                    onClose={() => dispatch(hideAlert())}
                />
            )}
    </div>
  );
}

export default App;
