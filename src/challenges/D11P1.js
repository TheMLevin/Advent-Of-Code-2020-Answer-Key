export function D11P1(input){
    let newmatrix = input.trim().split('\n').map(line => line.trim().split(''))
    function adjacent(matrix, x, y, findtype){
        if (findtype == '.'){
            return '.'
        }
        let full = 0
        for (let row of [...Array(3).keys()].map(row => row + y - 1)){
            for (let column of [...Array(3).keys()].map(col => col + x - 1)){
                if (0 <= row && row < matrix.length && 0 <= column && column < matrix[0].length && !(row == y && column == x) && matrix[row][column] == '#'){
                    if (findtype == 'L') {return 'L'}
                    full++
                }
            }
        }
        if (findtype == '#'){
            if (full >= 4) return 'L';
            else return '#';
        }
        return '#'
    }
    
    let oldmatrix = []
    while (oldmatrix.map(row => row.join('')).join('') != newmatrix.map(row => row.join('')).join('')){
        oldmatrix = newmatrix.map(row => row.slice())
        for (let [y, row] of [...oldmatrix.entries()]){
            for (let [x, seat] of [...row.entries()]){
                newmatrix[y][x] = adjacent(oldmatrix, x, y, oldmatrix[y][x])
            }
        }
    }
    return newmatrix.map(row => [...row.join('').matchAll(RegExp('#', 'g'))].length).reduce((a,b) => a + b, 0)
}