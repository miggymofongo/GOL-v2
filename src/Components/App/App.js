import './App.css';
import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import 'p5'

import 'react-p5'
import CollapsibleExample from '../Header/Header';
import Sketch from '../Project/Sketch';



export default class App extends Component {

  

  render() {
    return (
      
      <div>
<CollapsibleExample />
<Container>

        <h1 className="text-center">Game of Life V2 on React feat P5js!</h1>
        <p> Here are some directions to use the app.
        </p>
<Sketch />  
</Container>
        <Footer></Footer>
      </div>
      
     
    )
  }
}
