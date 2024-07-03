import './App.css';
import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import 'p5'
import 'react-p5'
import NavigationBar from '../Header/Header';
import Sketch from '../Project/Sketch';
import { Button } from 'react-bootstrap';


export default class App extends Component {

  sketchRef = React.createRef();

  handleReset = () => {
    if (this.sketchRef.current) {
      this.sketchRef.current.resetSketch();
    }
  }

  render() {
    return (
      
      <div>
<NavigationBar />
<Container>

        <h1 className="text-center">Game of Life V2 on React feat P5js!</h1>
        <p> Start the game by pressing Start/Reset button to 
          the left of these directions.
          <Button onClick={this.handleReset}>Reset Sketch</Button>

        
        </p>
<Sketch />  
</Container>
        <Footer></Footer>
      </div>
      
     
    )
  }
}
