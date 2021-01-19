export function D4P1(input){
    const passports = input.trim().split('\n\n').map(line => line.replaceAll('\n', ' ').split(' ').map(pair => pair.split(':')[0]))
    
    let valid = 0
    const IDtypes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    
    for (let passport of passports){
        let cond = true
        for (let IDtype of IDtypes){
            if (!passport.includes(IDtype)){
                cond = false
                break
            }
        }
        valid += cond
    }
    return valid
}