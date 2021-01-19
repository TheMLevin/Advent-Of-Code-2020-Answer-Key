export function D7P1(input){
    const bagsets = input.trim().split('\n').map(line => [...line.trim().matchAll(RegExp("([a-z]+ [a-z]+) bags?", 'g'))].map(bag => bag[1]))
    const bagdict = {}
    for (let bagset of bagsets){
        for (let bag of bagset.slice(1)){
            if (typeof bagdict[bag] != 'undefined') {if (!bagdict[bag].includes(bagset[0])) bagdict[bag].push(bagset[0]);}
            else bagdict[bag] = [bagset[0]];
        }
    }
    let bagchain = ['shiny gold']
    let i = 0
    while (i != bagchain.length){
        if(typeof bagdict[bagchain[i]] != 'undefined'){
            for (let bag of bagdict[bagchain[i]]){
                if (!bagchain.includes(bag)) bagchain.push(bag)
            }
        }
        i++
    }
    return bagchain.length - 1
}