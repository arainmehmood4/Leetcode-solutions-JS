/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
        if(m==0)
            return false;
        let n = matrix[0].length;
        let i=m-1, j = 0;
        while(i>=0 && j<n){
            if(matrix[i][j] == target)
                return true;
            if(matrix[i][j] > target)
                i--;
            else
                j++;
        }
        return false;
}
