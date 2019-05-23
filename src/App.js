import React, {Component} from 'react';
import './App.scss';
import ServicesComponent from './Components/ServicesComponent/ServicesComponent';
import EventComponent from './Components/EventComponent/EventComponent';
import './Styles/Main.scss';


class App extends Component {
    
   render() {

  return (
      <div className="App">
      <div className="App-image"></div>
      <div className="wrapper">
      <ServicesComponent />
      <EventComponent />
      </div>
      </div>
    );
  }
}
export default App;
