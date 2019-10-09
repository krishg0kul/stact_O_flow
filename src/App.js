import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/main";
// import Popup from "./Components/popup";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Main} exact></Route>
        {/* <Route path='/' compone]nt={Popup} exact></Route> */}
        {/*<Route path='/login' component={login}></Route> */}
      </Router>
    </div>
  );
}

export default App;
