import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="card-container">
          <div className="name-container">
            <button type="button" onClick={this.firstNameButton}>
              Show/Hide Firstname
            </button>
            <div className="container">{firstName ? null : <p>Joe</p>}</div>
          </div>
          <div className="name-container">
            <button type="button" onClick={this.lastNameButton}>
              Show/Hide Lastname
            </button>
            <div className="container">{lastName ? null : <p>Jonas</p>}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
