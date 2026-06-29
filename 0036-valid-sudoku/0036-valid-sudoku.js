/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    function isRowValid(board){
        let seen = new Set();

        for(let cell of board){

            if(cell === ".") continue;

            if(seen.has(cell)){
                return false;
            }

            seen.add(cell);
        }

        return true;
    }

    function checkAllRows(grid){

        for(let row of grid){

            if(isRowValid(row) === false){
                return false;
            }

        }

        return true;
    }

    function getcol(grid, colindex){

        let col = [];

        for(let row of grid){

            col.push(row[colindex]);

        }

        return col;
    }

    function checkallcol(grid){

        for(let i = 0; i < 9; i++){

            let col = getcol(grid, i);

            if(isRowValid(col) === false){
                return false;
            }

        }

        return true;
    }

    function getbox(grid, startRow, startCol){

        let box = [];

        for(let row = startRow; row < startRow + 3; row++){

            for(let col = startCol; col < startCol + 3; col++){

                box.push(grid[row][col]);

            }

        }

        return box;
    }

    function checkallbox(grid){

        for(let row = 0; row < 9; row = row + 3){

            for(let col = 0; col < 9; col = col + 3){

                let box = getbox(grid, row, col);

                if(isRowValid(box) === false){
                    return false;
                }

            }

        }

        return true;
    }

    if(checkAllRows(board) === false){
        return false;
    }

    if(checkallcol(board) === false){
        return false;
    }

    if(checkallbox(board) === false){
        return false;
    }

    return true;

};