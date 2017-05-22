import React from 'react';
import './App.css';
import anchor_img from './anchor.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainAnimation />
      </div>
    );
  }
}

function Header(){
  return (
    <div className="App">
      <div className="App-header">
        <h3>Anchor Splash 2017 Theta Chi</h3>
      </div>
    </div>
  );
}

function MainAnimation() {
  return (
    <div className="MainAnimation">
      <DancingAnchor />
      <span className="DG-Block">DG!</span>
      <DancingAnchor />
    </div>
  );
}

function DancingAnchor() {
  return (
    <Anchor />
  );
}

function Anchor() {
  return (
    <span className="Anchor">
      <img src={anchor_img} alt="anchor"/>
    </span>
  );
}

export default App;
