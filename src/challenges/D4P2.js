export function D4P2(input){
    const lines = input.trim().split('\n\n')
    lines.forEach(num => {if(!RegExp('^(?:[a-z]{3}:[#0-9a-z]+[ \n]?){1,8}$').test(num)) throw "Invalid Input"});
    const passports = lines.map(line => line.replaceAll('\n', ' ').split(' ').map(pair => pair.split(':')))
    
    let valid = 0
    const IDtypes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    const regex = [RegExp('^(?:19(?:[2-9][0-9])|200[0-2])$'),
                   RegExp('^20(?:1[0-9]|20)$'),
                   RegExp('^20(?:2[0-9]|30)$'),
                   RegExp('^(?:(?:1(?:[5-8][0-9]|9[0-3])cm)|(?:59|6[0-9]|7[0-6])in)$'),
                   RegExp('^#[0-9|a-f]{6}$'),
                   RegExp('^(?:amb|blu|brn|gry|grn|hzl|oth)$'),
                   RegExp('^[0-9]{9}$')]
    
    for (let passport of passports){
        const IDs = Object.fromEntries(passport)
        let cond = true
        for (let [IDtype, reg] of IDtypes.map((e, i) => [e, regex[i]])){
            if (typeof IDs[IDtype] != 'undefined'){
                const ID = IDs[IDtype]
                if (!reg.test(ID)){
                    
                    cond = false
                    break
                }
            } else {
                cond = false
                break
            }
        } 
        valid += cond
    }
    return valid
}