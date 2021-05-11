import React from 'react'
import {Provider} from 'react-redux'
import './App.css';
import {Home} from './Components/Home/Home'
import {Landing} from './Components/Landing/LandingPage'
import {Route} from 'react-router-dom'
import {store} from './redux/store'
import { SpecificCountry } from './Components/SpecificCountry/SpecificCountry';
import { ActivitiesForm } from './Components/ActivitiesForm/ActivitiesForm';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/country/:id" component={SpecificCountry}></Route>
        <Route path="/home/t_activity" component={ActivitiesForm}></Route>
      </div>
    </Provider>
  );
}

export default App;
