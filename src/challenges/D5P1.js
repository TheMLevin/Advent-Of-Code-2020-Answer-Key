export function D5P1(input){
    const IDs = input.trim().split('\n').map(line => parseInt(line.replaceAll('F', '0').replaceAll('B', '1').replaceAll('L', '0').replaceAll('R', '1'), 2)).sort((a,b) => a - b)
    return Math.max(...IDs)
}