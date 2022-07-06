class Cell {
    constructor(row, column, parentGrid, parentSize) {
        this.row = row;
        this.column = column;
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
        this.visited = false;
        this.walls = {
            topWall: true,
            rightWall: true,
            bottomWall: true,
            leftWall: true,
        };
    }
}
