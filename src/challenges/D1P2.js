export function D1P2(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[0-9]{1,4}\n?$').test(num)) throw "Invalid Input"});
    const nums = lines.map(x => parseInt(x.trim()));
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