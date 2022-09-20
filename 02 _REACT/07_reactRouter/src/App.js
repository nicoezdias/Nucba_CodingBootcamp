import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Post from './pages/posts/Posts';
import Navigation from './components/navigation/Navigation';
import Layout from './components/layout/Layout.jsx';
import './style.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/posts">
              <Post />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

render(React.createElement(App), document.getElementById('root'));
