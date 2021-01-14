export function D1P1(input){
    const nums = input.trim().split('\n').map(x => parseInt(x.trim()))
    nums.forEach(num => {if(isNaN(num)) throw "Invalid Input"});
    let numkeys = nums.reduce((dict, key) => Object.assign(dict, {[key]: null}), {})
    for (let x of nums) {
        let find = 2020 - x
        if (numkeys[find] === null){
            return(find * x)
        }
    }
}