class Grid {
    height: number;
    width: number;
    mines: number;
    // seed: number;
    placedMines: number = 0;
    grid: Array<Array<number>>;

    constructor(height: number = 16, width: number = 30, mines: number = 99) {
        if (height <= 0 || width <=0 || mines <= 0) {
            //TODO: throw exception
        }

        this.height = height;
        this.width = width;
        this.mines = mines;

        // populate empty grid
        this.grid = new Array<Array<number>>();
        this.grid.fill(new Array<number>().fill(0, 0, this.width - 1), 0, this.height - 1);
    }

    distributeMines(): void {
        //TODO: use a PRNG with seeding capabilities
        while(this.placedMines < this.mines) {
            // random coords within grid
            let x = Math.floor(Math.random() * this.width);
            let y = Math.floor(Math.random() * this.height);

            // if no mine at x,y
            if (!this.grid[y][x]) {
                this.grid[y][x] = 1;
                this.placedMines++;
            }
        }
    }

    countSurroundingMines(x: number, y: number): number {
        // sum of surrounding tiles
        return this.grid[y - 1][x - 1] + this.grid[y - 1][x] + this.grid[y - 1][x + 1] + this.grid[y][x - 1]
            + this.grid[y][x + 1] + this.grid[y + 1][x - 1] + this.grid[y + 1][x] + this.grid[y + 1][x + 1];
    }

    isMine(x: number, y:number): boolean {
        return this.grid[y][x] == 1;
    }
}

export default Grid