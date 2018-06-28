import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petsToDisplay = this.props.pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet}/> )

    return <div className="ui cards">{petsToDisplay}</div>
  }
}

export default PetBrowser
