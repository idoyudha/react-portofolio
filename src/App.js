import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import ResumePage from './pages/resume';
// import FooterSection from './components/Footer';
import NotFound from './pages/notFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>  
        <ScrollToTop/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/resume" component={ResumePage}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      {/* <FooterSection/> */}
    </>
  );
}

export default App;
