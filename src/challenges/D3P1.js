export function D3P1(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[#\.]+\n?$').test(num)) throw "Invalid Input"});
    const slopes = lines.map(row => row.trim())

    let trees = 0
    let y = 0
    while (y < slopes.length){
        const x = (y * 3) % slopes[0].length
        trees += slopes[y][x] === "#"
        y += 1;
    }
    return trees
}