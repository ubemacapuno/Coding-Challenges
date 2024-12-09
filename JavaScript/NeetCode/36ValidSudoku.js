class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    /**
     * use a hash set for each row to check for duplicates O(1)
     * use a hash set for each column to check for duplicates O(1)
     * What about the 3x3 grids (9 total)? Also use a hashset!
     *  - Take the indices and divide by 3 to get which square its part of
     *  - Example: indices/row,col [8,8] is [8/3, 8/3], which becomes [2,2].
     *  - This means[8,8] is in the 3x3 square of [2,2]
     */

    const cols = new Map();
    const rows = new Map();
    const squares = new Map();

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === ".") continue;

        const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

        if (
          (rows.get(r) && rows.get(r).has(board[r][c])) ||
          (cols.get(c) && cols.get(c).has(board[r][c])) ||
          (squares.get(squareKey) && squares.get(squareKey).has(board[r][c])) // board[r][c] is the current number we're checking (like '5'), and .has() returns true if the Set already contains this number
        ) {
          return false;
        }

        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        if (!squares.has(squareKey)) squares.set(squareKey, new Set());

        rows.get(r).add(board[r][c]);
        cols.get(c).add(board[r][c]);
        squares.get(squareKey).add(board[r][c]);
      }
    }
    return true;
  }
}
