export function D10P1(input){
    const adapters = [0].concat(input.trim().split('\n').map(line => parseInt(line.trim())).sort((a, b) => a - b))
    let onethree = [0,1]
    for (let i of [...Array(adapters.length).keys()].slice(1)){
        onethree[Math.floor((adapters[i] - adapters[i-1]) / 2)]++
    }
    return (onethree[0] * onethree[1])
}