export function D1P2(input){
    const nums = input.trim().split('\n').map(x => parseInt(x.trim()));
    const numkeys = nums.reduce((dict, key) => Object.assign(dict, {[key]: null}), {})
    for (let x of nums) {
        let remain = 2020 - x
        for (let y of nums.filter((i) => x != i && i < remain)){
            find = remain - y
            if (numkeys[find] === null){
                return(y * find * x)
            }
        }
    }
}