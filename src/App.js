/* import logo from './logo.svg'; */

import './App.css';
import React, { Component } from 'react';

// components

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => this.setState( {searchfield: e.target.value});


  render() {

    // destructuring state
    // if these don't match what's in the 'state' they don't work
    // so do that.
    
    const { monsters, searchfield } = this.state;
  
    // filter the monsters based on the state of searchfield

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    

    return (
        <div className="App">
          <SearchBox placeholder="Search Monsters"
            handleChange={this.handleChange}
          />
           <CardList monsters={filteredMonsters} />
        </div>
      );
  }
}

export default App;
