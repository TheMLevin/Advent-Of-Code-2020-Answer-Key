export function D10P2(input){
    const adapters = [0].concat(input.trim().split('\n').map(line => parseInt(line.trim())).sort((a, b) => a - b))
    let gaps = []
    for (let i of [...Array(adapters.length).keys()].slice(1)){
        gaps.push(adapters[i] - adapters[i-1])
    }
    let permutations = 1
    let i = 0
    let consecutives = []
    while(i < gaps.length){
        let consecutive = 0
        while (i < gaps.length && gaps[i] == 1){
            consecutive++
            i++
        }
        consecutives.push(consecutive)
        i++
    }
    let sequence = [1,1,2]
    for (let x of Array(Math.max(...consecutives) - 2).keys()){
        sequence.push(sequence.slice(x,x+3).reduce((a,b) => a + b, 0))
    }
    for (let x of consecutives){
        permutations *= sequence[x]
    }
    return permutations
}