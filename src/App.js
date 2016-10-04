import React, { Component } from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader';
import Menu from './components/Menu';
import FadeOutFadeIn from './components/FadeOutFadeIn';
import Num from './components/Num';
import Num2 from './components/Num2';
import Popup from './components/Popup';
import SlideIn from './components/SlideIn';

class App extends Component {

  state = {
		menuVisible: false,
    slideInVisible: false,
    count: 1,
    count2: 1,
    popupVisible: false
	}

  showMenu = () => {
    this.setState({ menuVisible: true })
  }

  hideMenu = () => {
    this.setState({ menuVisible: false })
  }

  toggleSlideIn = () => {
    this.setState({ slideInVisible: !this.state.slideInVisible })
  }

  hideSlideIn = () => {
    this.setState({ slideInVisible: false })
  }

  add = () => {
    this.setState({count: this.state.count + 1})
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
        <SearchHeader />
        <button id="menuButton" onClick={() => this.showMenu()}>Show menu</button>
        <button id="slideInButton" onClick={() => this.toggleSlideIn()}>Show/hide slide in</button>
        <button id="addButton" onClick={() => this.add()}>Add one</button>
        <button id="addButton2" onClick={() => this.add2()}>Add one 2</button>
        <button id="popupButton" onClick={() => this.showPopup()}>Show/hide popup</button>
        <SlideIn visible={this.state.slideInVisible} count={this.state.count} onClose={this.hideSlideIn} />
        <FadeOutFadeIn transitionName="num" className="num-fader">
          <Num value={this.state.count} key={this.state.count}/>
        </FadeOutFadeIn>
        <Num2 value={this.state.count2} />
        <Popup visible={this.state.popupVisible} onClose={this.hidePopup} />
        <Menu visible={this.state.menuVisible} onClose={this.hideMenu} />
      </div>
    );
  }
}

export default App;
