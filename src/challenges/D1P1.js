export function D1P1(input){
    const nums = input.trim().split('\n').map(x => parseInt(x.trim()));
    const numkeys = nums.reduce((dict, key) => Object.assign(dict, {[key]: null}), {})
    for (let x of nums) {
        let find = 2020 - x
        if (numkeys[find] === null){
            return(find * x)
        }
    }
}