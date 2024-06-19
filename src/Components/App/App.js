import './App.css';
import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import 'p5'
import Button from 'react-bootstrap/esm/Button';
import 'react-p5'
import NavigationBar from '../Header/Header';
import Sketch from '../Project/Sketch';
import resetSketch from '../Project/Sketch'



export default class App extends Component {

  

  render() {
    return (
      
      <div>
<NavigationBar />
<Container>

        <h1 className="text-center">Game of Life V2 on React feat P5js!</h1>
        <p> Here are some directions to use the app.
        </p>
<Sketch />  <Button onClick={resetSketch}>WEPA</Button>
</Container>
        <Footer></Footer>
      </div>
      
     
    )
  }
}
