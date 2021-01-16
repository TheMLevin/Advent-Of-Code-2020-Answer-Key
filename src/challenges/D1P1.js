export function D1P1(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[0-9]{1,4}\n?$').test(num)) throw "Invalid Input"});
    const nums = lines.map(x => parseInt(x.trim()));
    const numkeys = nums.reduce((dict, key) => Object.assign(dict, {[key]: null}), {})
    for (let x of nums) {
        let find = 2020 - x
        if (numkeys[find] === null){
            return(find * x)
        }
    }
}