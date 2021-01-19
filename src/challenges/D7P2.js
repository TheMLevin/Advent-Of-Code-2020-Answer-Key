export function D7P1(input){
    const bagsets = input.trim().split('\n').map(line => [...line.trim().matchAll(RegExp("(?:([1-9]) )?([a-z]+ [a-z]+) bags?", 'g'))].map(bag => bag.slice(1)))
    const bagdict = {}
    for (let bagset of bagsets){
        bagdict[bagset[0][1]] = bagset.slice(1).filter(bag => typeof bag[0] != 'undefined').map(bag => [parseInt(bag[0]), bag[1]])
    }
    let bagchain = [[1, 'shiny gold']]
    let i = 0
    let bags = -1
    while (i != bagchain.length){
        bags += bagchain[i][0]
        for (let bag of bagdict[bagchain[i][1]]){
            bagchain.push([bag[0] * bagchain[i][0], bag[1]])
        }
        i++
    }
    return bags
}