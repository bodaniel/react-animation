import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Num from './components/Num';
import Popup from './components/Popup';

class App extends Component {

  state = {
		menuVisible: false,
    count: 1,
    updating: false,
    popupVisible: false
	}

  showMenu = () => {
    this.setState({ menuVisible: true })
  }

  hideMenu = () => {
    this.setState({ menuVisible: false })
  }

  add = () => {
    this.setState({updating: true})
    setTimeout(_ => {
      this.setState({updating: false, count: this.state.count + 1})
    }, 150)
  }

  showPopup = () => {
    this.setState({ popupVisible: !this.state.popupVisible})
  }

  hidePopup = () => {
    this.setState({ popupVisible: false})
  }

  render() {
    return (
      <div className="App">
        <button id="menuButton" onClick={() => this.showMenu()}>Show menu</button>
        <button id="addButton" onClick={() => this.add()}>Add one</button>
        <button id="popupButton" onClick={() => this.showPopup()}>Show/hide popup</button>
        <Menu visible={this.state.menuVisible} onClose={this.hideMenu} />
        <Num value={this.state.count} updating={this.state.updating}/>
        <Popup visible={this.state.popupVisible} onClose={this.hidePopup} />
      </div>
    );
  }
}

export default App;
