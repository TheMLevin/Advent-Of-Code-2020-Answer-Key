export function D6P2(input){
    const groups = input.trim().split('\n\n').map(line => line.trim().split('\n'))
    let count = 0
    for (let group of groups){
        let letters = 0
        for (let letter of group[0]){
            let cond = true
            let person = 1
            while (person < group.length){
                if (!group[person].includes(letter)){
                    cond = false
                    break
                }
                person++
            }
            letters += cond
        }
        count += letters
    }
    return count
}