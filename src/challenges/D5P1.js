export function D5P1(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[FB]{7}[RL]{3}$').test(num)) throw "Invalid Input"});
    const IDs = lines.map(line => parseInt(line.replaceAll('F', '0').replaceAll('B', '1').replaceAll('L', '0').replaceAll('R', '1'), 2)).sort((a,b) => a - b)
    return Math.max(...IDs)
}