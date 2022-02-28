import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Pages/Header1';
import Section from './components/Pages/Section';
import Detail from './components/Pages/Detail';
import About from './components/Pages/About';
import Category from './components/Pages/Category';
import { DataProvider } from './components/Context';
import Cart from './components/Pages/Cart';
import Shipping from './components/Pages/Shipping';

export class App extends Component {
  render() {
    return (
      <DataProvider>
      <div className='app'>
        <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Section}/>
        <Route exact path='/product/:id' component={Detail}/>
        <Route exact path='/about/' component={About}/>
        <Route exact path='/cart/' component={Cart}/>
        <Route exact path='/shipping/' component={Shipping}/>
        <Route exact path='/category/:category' component={Category} />
     </Switch>
          </Router>
      </div>
      </DataProvider>
    )
  }
}

export default App
