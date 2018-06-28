import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (event) => {
    // debugger;
    if(event.target.tagName === "SELECT"){
      let array=['all','cat','dog','micropig'];
      this.setState({
        filters:{ type: array[event.target.selectedIndex] }
      }, ()=> console.log(this.state.filters.type))
    }
    // console.log(this.state.filters.type);
  }

  findPetsClick = (event) => {
    let url;
    if(this.state.filters.type == 'all'){url ='/api/pets';}
    else{ url = '/api/pets' + "?type=" + this.state.filters.type}
    fetch(url).then(j => j.json()).then(d => this.setState({pets: d}))
    // debugger;
  }
  adoptPet = (petId) =>{
    let foundPet = this.state.pets.find(pet => pet.id === petId)
    foundPet.isAdopted = true;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
