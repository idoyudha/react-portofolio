import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import ResumePage from './pages/resume';
import FooterSection from './components/Footer';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/resume" component={ResumePage}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      <FooterSection/>
    </>
  );
}

export default App;
