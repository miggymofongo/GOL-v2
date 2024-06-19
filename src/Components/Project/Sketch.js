import React from "react";
import p5 from 'p5';
import { Button } from "bootstrap";


class Sketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let grid;
        let cols;
        let rows;
        let resolution = 50;

        function make2DArray(cols, rows) {
            let arr = new Array(cols);
            for (let i = 0; i < cols; i++) {
                arr[i] = new Array(rows).fill(0);
            }
            return arr;
        }

        

        p.setup = () => {
            p.createCanvas(1000, 1000);
            cols = p.width / resolution;
            rows = p.height / resolution;
            grid = make2DArray(cols, rows);
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    grid[i][j] = p.floor(p.random(2));
                }
            }

            
        }

       

        p.draw = () => {
            p.background(0);
            if (p.mouseIsPressed) {
                p.fill(0);
              } else {
                p.fill(255);
              }
              p.ellipse(p.mouseX, p.mouseY, 80, 80);
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let x = i * resolution;
                    let y = j * resolution;
                    if (grid[i][j] === 1) {
                        p.fill(255);
                        p.stroke(0);
                        p.rect(x, y, resolution - 1, resolution - 1);
                    }
                }
            }

            let next = make2DArray(cols, rows);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let state = grid[i][j];
                    let sum = 0;
                    for (let m = -1; m <= 1; m++) {
                        for (let n = -1; n <= 1; n++) {
                          if (i + m >= 0 && i + m < cols && j + n >= 0 && j + n < rows) {
                            sum += grid[i + m][j + n];
                        }}
                    }
                    sum -= grid[i][j];

                    if (state === 0 && sum === 3) {
                        next[i][j] = 1;
                    } else if (state === 1 && (sum < 2 || sum > 3)) {
                        next[i][j] = 0;
                    } else {
                        next[i][j] = state;
                    }
                }
            }
            grid = next;
            
        }
        
    }
    resetSketch = () => {
        // Reset the grid with random values
        const { cols, rows } = this.state;
        const grid = this.make2DArray(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.floor(Math.random(2));
            }
        }
        this.setState({ grid });
        this.myP5.redraw(); // Force p5 to redraw using the new grid
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
