export function D12P1(input){
    const directions = input.trim().split('\n').map(line => [line[0], parseInt(line.slice(1))])
    let pos = [0,0]
    let face = 1
    for (let direction of directions){
        if (['N','E','S','W'].includes(direction[0])){
            let go = parseInt(direction[0].replace('N', '0').replace('E', '1').replace('S', '2').replace('W', '3'))
            pos[go % 2] += direction[1] * (2 * Math.floor(go / 2) - 1)
        }
        else if (direction[0] == 'R') face = (face + Math.floor(direction[1] / 90)) % 4
        else if (direction[0] == 'L') face = (((face - Math.floor(direction[1] / 90)) % 4) + 4) % 4
        else if (direction[0] == 'F') pos[((face % 2) + 2) % 2] += direction[1] * (2 * Math.floor(face / 2) - 1)
    }
    return pos.map(x => Math.abs(x)).reduce((a, b) => a + b, 0)
}