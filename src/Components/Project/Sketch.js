import React from "react";
import p5 from 'p5';

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
        let Pause = false

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
