import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Layout>
              <Main/>
            </Layout>
          </div>
        </Router>
    );
  }
}

export default App;
