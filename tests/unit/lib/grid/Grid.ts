/// <reference types="intern" />

import Grid from "../../../../src/lib/grid/Grid";

const {registerSuite} = intern.getPlugin('interface.object');
const {assert} = intern.getPlugin('chai')

registerSuite('Grid', {
    'default size grid init'() {
        let grid = new Grid();

        assert.equal(grid.grid.length, grid.height, "actual grid doesn't have the specified height")
        assert.equal(grid.grid[0].length, grid.width, "actual grid doesn't have the specified width")
    },

    'non default size grid init'() {
        let grid = new Grid(5, 5, 5);

        assert.equal(grid.height, 5)
        assert.equal(grid.width, 5)
        assert.equal(grid.mines, 5)

        assert.equal(grid.grid.length, grid.height, "actual grid doesn't have the specified height")
        assert.equal(grid.grid[0].length, grid.width, "actual grid doesn't have the specified width")
    }
});