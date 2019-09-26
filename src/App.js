import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{

  constructor(){
    super();
    this.state={
    monsters:[
      {name:'banshee' ,id:'m1'},
      {name:'frankenstein',id:'m2'},
      {name:'godzilla',id:'m3'}
    ]

  };
}

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({monsters:users}));
  }
  render()
  {

  
    return (
      
        <div className="App">
        <Cardlist monsters={this.state.monsters}/>
            
            
          </div>
          
        
     
          
        );



  }


}

export default App;
