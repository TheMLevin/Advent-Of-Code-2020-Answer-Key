export function D11P2(input){
    let newmatrix = input.trim().split('\n').map(line => line.trim().split(''))
    function adjacent(matrix, x, y, findtype){
        if (findtype == '.'){
            return '.'
        }
        let full = 0
        for (let [dx, dy] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]){
            let i = 1
            while(true){
                let row = y + i * dy
                let column = x + i * dx
                if (0 <= row && row < matrix.length && 0 <= column && column < matrix[0].length){
                    if (matrix[row][column] == '#'){
                        if (findtype == 'L') return 'L'
                        full ++
                        break
                    } else if (matrix[row][column] == 'L') break
                } else break
                i++
            }
        }
        if (findtype == '#'){
            if (full >= 5) return 'L';
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