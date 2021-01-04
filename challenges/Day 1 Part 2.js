export function D1P2(input){
    nums = input.forEach(x => parseInt(x.trim()))
    numkeys = nums.reduce((dict, key) => dict[key] = undefined, {})

    nums.forEach(function(x){
        remain = 2020 - x
        nums.filter((i) => x != i && i < remain).forEach(function(y){
            find = remain - y
            if (numkeys[find] === undefined){
                return(y * find * x)
            }
        })
    })
}
