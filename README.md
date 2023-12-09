# Game Of Life

**Conway's Game of Life Explanation:**

**What is the Game?**

Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It is a zero-player game, meaning its progression is determined solely by its initial state, with no further input required. Despite its simplicity, the Game of Life exhibits complex and fascinating patterns and behaviors.

**Simulation:**

The game unfolds on an infinite two-dimensional grid, where each cell can either be alive or dead. The state of each cell evolves through discrete time steps according to a set of rules. These rules dictate the fate of a cell based on its current state and the state of its neighboring cells.

**Rules:**

1. **Underpopulation:** Any live cell with fewer than two live neighbors dies, as if by underpopulation.

2. **Survival:** Any live cell with two or three live neighbors survives to the next generation.

3. **Overpopulation:** Any live cell with more than three live neighbors dies, as if by overpopulation.

4. **Reproduction:** Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

These simple rules give rise to complex and dynamic patterns over time.

**Computer Science Significance:**

Conway's Game of Life is significant in computer science for several reasons:

1. **Algorithmic Complexity:** The game's emergent patterns showcase how complexity can arise from simple rules. It demonstrates the power of algorithmic processes in generating intricate structures.

2. **Parallel Computing:** The game's grid-based structure lends itself to parallel computing applications. Each cell's state is independent of others, allowing for parallel processing and optimization.

3. **Pattern Recognition:** Computer scientists study the Game of Life to understand and recognize various patterns. This has applications in image processing, computer vision, and artificial intelligence.

4. **Cellular Automata:** The Game of Life is a classic example of a cellular automaton—a discrete model studied in theoretical computer science. It exemplifies the concept of a grid of cells whose states change over discrete time steps based on predefined rules.

Overall, Conway's Game of Life serves as a captivating and educational tool, offering insights into algorithmic complexity, parallel processing, and cellular automata, which are foundational concepts in computer science.

## Usage
To run the game, simply run the following command in the terminal:
```
open gameOfLife.html
```

## Demo
https://github.com/lironfarzam/Game-Of-Life/assets/87701576/ecb18db8-dbaa-4e38-b9b5-eccd334fccd7




