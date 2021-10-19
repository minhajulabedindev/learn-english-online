import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Success from './Component/Success/Success';
import Service from './Component/Service/Service';
import About from './Component/About/About';

import Footer from './Component/Footer/Footer';
import Contract from './Component/Contract/Contract';
import Sign from './Component/Sign/Sign';
import NotFounds from './Component/NotFounds/NotFounds';



function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
             <Home></Home>
         </Route>
         <Route exact path="/home">
             <Home></Home>
         </Route>
         <Route exact path="/service">
                <Service></Service>
         </Route>
         <Route path="/success">
             <Success></Success>
         </Route>
         <Route path="/about">
            <About></About>
         </Route>
         <Route path="/contract">
            <Contract></Contract>
         </Route>
         <Route path="/sing">
           <Sign></Sign>
         </Route>
         
         <Route path="*">
          <NotFounds></NotFounds>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
