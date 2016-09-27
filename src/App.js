import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Num from './components/Num';
import Num2 from './components/Num2';
import Popup from './components/Popup';

class App extends Component {

  state = {
		menuVisible: false,
    count: 1,
    count2: 1,
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
    }, 200)
  }

  add2 = () => {
    this.setState({count2: this.state.count2 + 1})
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
        <button id="addButton2" onClick={() => this.add2()}>Add one 2</button>
        <button id="popupButton" onClick={() => this.showPopup()}>Show/hide popup</button>
        <Menu visible={this.state.menuVisible} onClose={this.hideMenu} />
        <Num value={this.state.count} updating={this.state.updating}/>
        <Num2 value={this.state.count2} />
        <Popup visible={this.state.popupVisible} onClose={this.hidePopup} />
      </div>
    );
  }
}

export default App;
