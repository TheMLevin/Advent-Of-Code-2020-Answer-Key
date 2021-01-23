export function D9P1(input){
    const nums = input.trim().split('\n').map(line => parseInt(line.trim()))
    let invalid = 0
    for (let [i, num] of nums.slice(25).entries()){
        let preamble = nums.slice(i,i + 25)
        let cond = true
        for (let x of preamble){
            let find = num - x
            if (find != x && preamble.includes(find)) {cond  = false; break}
        }
        if (cond) return num
    }
}