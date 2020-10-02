import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/welcome/Error';
import Welcome from './components/welcome/Welcome';
import Books from './components/books/Books';
import Photos from './components/photos/Photos';
import Navigation from './components/navigation/Navigation';
import Jeopardy from './components/jeopardy/Jeopardy';
function App() {
  return (

    <div className="App">
      {/* <Welcome name="Kourtney" /> */}
      <Navigation />
      <Switch>
        <Route  exact path="/" render={(props) => <Welcome {...props}name='Kourtney' />} />
        <Route path="/welcome/:name" render={(props) => <Welcome{...props} name={props.match.params.name} />} />
        <Route path="/books" component={Books} />
        <Route path="/photos" component={Photos} />
        <Route path="/jeopardy"component={Jeopardy}/>
        <Route component ={Error}/>
      </Switch>

    </div>


  );
}

export default App;
