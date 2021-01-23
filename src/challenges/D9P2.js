export function D9P2(input){
    const nums = input.trim().split('\n').map(line => parseInt(line.trim()))
    let invalid = 0
    for (let [i, num] of nums.slice(25).entries()){
        let preamble = nums.slice(i,i + 25)
        let cond = true
        for (let x of preamble){
            let find = num - x
            if (find != x && preamble.includes(find)) {cond  = false; break}
        }
        if (cond){
            invalid = num
            break
        }
    }
    
    for (let i of Array(nums.length).keys()){
        let sequence = [nums[i]]
        let seqsum = nums[i]
        let x = i + 1
        while (seqsum < invalid){
            sequence.push(nums[x])
            seqsum += nums[x]
            x++
        }
        if (seqsum == invalid){
            return Math.min(...sequence) + Math.max(...sequence)
        }
    }
}