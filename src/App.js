
import React from 'react'
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ThemeList from "./components/ThemesList"
import Search from "./components/Search"
import Create from './components/Create'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/admin/create" component={Create} />
      <Route path="/themes" component={ThemeList} />
      <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;