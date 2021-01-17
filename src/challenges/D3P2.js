export function D3P2(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[#\.]+\n?$').test(num)) throw "Invalid Input"});
    const slopes = lines.map(row => row.trim())

    let product = 1;
    for (let [a, b] of [[1,1],[3,1],[5,1],[7,1],[1,2]]){
        let trees = 0
        let i = 0
        while (i < Math.floor(slopes.length / b)){
            const y = i * b
            const x = (i * a) % slopes[0].length
            if (slopes[y][x] === "#"){
                trees += 1
            }
            i += 1;
        }
        product *= trees
    }
    return product
}