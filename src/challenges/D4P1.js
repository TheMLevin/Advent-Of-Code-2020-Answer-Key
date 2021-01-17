export function D4P1(input){
    const lines = input.trim().split('\n\n')
    lines.forEach(num => {if(!RegExp('^(?:[a-z]{3}:[#0-9a-z]+[ \n]?){1,8}$').test(num)) throw "Invalid Input"});
    const passports = lines.map(line => line.replaceAll('\n', ' ').split(' ').map(pair => pair.split(':')[0]))
    
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