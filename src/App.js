import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';


function App() {
  
  
  return (
     <Router> 
      <div className="app-box">
       <div className="container app_container">
         <div className="row app_row">
            <div className="col-lg-3">
              
                  <Sidebar/>
              
            </div>
            <div className="col-lg-9 app_main-content">
                <Navbar/>
                
                  <Switch>
                  <Route exact path="/">
                    <About/>
                  </Route>
                  <Route path="/resume">
                    <Resume/>
                  </Route>
                  <Route path="/projects">
                    <Projects/>
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                  </Switch>
                
            </div>
         </div>
       </div>
    </div>
    </Router>
  );
}

export default App;
