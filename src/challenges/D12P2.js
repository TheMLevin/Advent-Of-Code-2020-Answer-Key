export function D12P2(input){
    const directions = input.trim().split('\n').map(line => [line[0], parseInt(line.slice(1))])
    let way = [1, 10]
    let pos = [0,0]
    for (let direction of directions){
        if (['N','E','S','W'].includes(direction[0])){
            let go = parseInt(direction[0].replace('N', '0').replace('E', '1').replace('S', '2').replace('W', '3'))
            way[go % 2] += direction[1] * (-2 * Math.floor(go / 2) + 1)
        }
        else if (direction[0] == 'L'){
            let go = Math.floor(direction[1] / 90)
            way = [(-2 * Math.floor(go / 2) + 1) * way[go % 2], (-2 * Math.floor(((go + 1) % 4) / 2) + 1) * way[1 - go % 2]]
        }
        else if (direction[0] == 'R'){
            let go = Math.floor(direction[1] / 90)
            way = [(-2 * Math.floor(((go + 1) % 4) / 2) + 1) * way[go % 2], (-2 * Math.floor(go / 2) + 1) * way[1 - go % 2]]
        }
        else if (direction[0] == 'F'){
            pos[0] += direction[1] * way[0]
            pos[1] += direction[1] * way[1]
        }
    }
    return pos.map(x => Math.abs(x)).reduce((a, b) => a + b, 0)
}