// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  pgsize = 12;
  apikey = process.env.REACT_APP_NEWS_API;
  state={
    progress : '10'
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>       
          <Navbar/>
          <LoadingBar
          loaderSpeed={1000}
        color='#f11946'
        progress={this.state.progress}
      />
        {/* <News setProgress={this.setProgress} pagesize={10} country="in" category="business"/> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={10} country="in" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={10} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={10} country="in" category="entertainment"/>}/ >
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={10} country="in" category="health"/>}/>
          <Route exact path="/science" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={10} country="in" category="science"/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pagesize={10} country="in" category="Sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={10} country="in" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App



