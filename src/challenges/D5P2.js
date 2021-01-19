export function D5P2(input){
    const IDs = input.trim().split('\n').map(line => parseInt(line.replaceAll('F', '0').replaceAll('B', '1').replaceAll('L', '0').replaceAll('R', '1'), 2)).sort((a,b) => a - b)
    return [...Array(IDs.length).keys()].filter(x => x + Math.min(...IDs) != IDs[x]).map(x => x + Math.min(...IDs))[0]
}