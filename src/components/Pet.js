import React from 'react'

class Pet extends React.Component {

  render() {
    // console.log(this.props.pet)
    let gender;
    gender = this.props.pet.gender == "male"? '♂' : '♀';

    let button1 = <button className="ui disabled button">Already adopted</button>;
    let button2 = <button className="ui primary button" onClick={
      () => { this.props.onAdoptPet(this.props.pet.id)}
    }>Adopt pet</button>;


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted? button1: button2}
        </div>
      </div>
    )
  }
}

export default Pet
