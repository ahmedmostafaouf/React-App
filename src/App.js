import React ,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './Component/Contact/Contact';
import NavBar from './Component/NavBar/NavBar';
import Index from './Component/Index/Index'


class App extends Component{
  render(){
    return(
      <BrowserRouter >
              <NavBar/>
              <Route exact path="/" component={Index}/>
              <Route path="/contact" component={Contact}/>
              
    </BrowserRouter>
    )
  }
}


export default App;
