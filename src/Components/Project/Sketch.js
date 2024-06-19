import React from "react";
import p5 from 'p5';

/* in this react component, I am creating a p5 js
sketch to show my game of life simulation */

class Sketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.cols = 0;
        this.rows = 0;
        this.grid = []
    }

    make2DArray = (cols, rows) => {
        let arr = new Array(cols);
        for (let i = 0; i < cols; i++) {
            arr[i] = new Array(rows).fill(0);
        }
        return arr;
    }

    resetSketch = () => {
        this.grid = this.make2DArray(this.cols, this.rows);
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j] = Math.floor(Math.random() * 2);
            }
        }
        this.myP5.redraw(); // Force p5 to redraw using the new grid
    }
    Sketch = (p) => {
        let cols;
        let rows;
        let resolution = 10;

        p.setup = () => {
            p.createCanvas(1000, 1000);
            this.cols = p.width / resolution;
            this.rows = p.height / resolution;
            this.grid = this.make2DArray(this.cols, this.rows);
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    this.grid[i][j] = p.floor(p.random(2));
                }
            }

        

        const resetButton = p.createButton('Start/Reset')
        resetButton.position(160, 190);    
        resetButton.mousePressed(this.resetSketch);
        }    

        

        p.draw = () => {
            p.background(0);
            if (p.mouseIsPressed) {
                p.fill(0);
              } else {
                p.fill(255);
              }
              p.ellipse(p.mouseX, p.mouseY, 80, 80);
            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    let x = i * resolution;
                    let y = j * resolution;
                    if (this.grid[i][j] === 1) {
                        p.fill(255);
                        p.stroke(0);
                        p.rect(x, y, resolution - 1, resolution - 1);
                    }
                }
            }

            let next = this.make2DArray(this.cols, this.rows);

            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    let state = this.grid[i][j];
                    let sum = 0;
                    for (let m = -1; m <= 1; m++) {
                        for (let n = -1; n <= 1; n++) {
                          if (i + m >= 0 && i + m < this.cols && j + n >= 0 && j + n < this.rows) {
                            sum += this.grid[i + m][j + n];
                        }}
                    }
                    sum -= this.grid[i][j];

                    if (state === 0 && sum === 3) {
                        next[i][j] = 1;
                    } else if (state === 1 && (sum < 2 || sum > 3)) {
                        next[i][j] = 0;
                    } else {
                        next[i][j] = state;
                    }
                }
            }
            this.grid = next;
            
        }
        
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    componentWillUnmount() {
        this.myP5.remove();
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default Sketch;
