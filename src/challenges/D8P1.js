export function D8P1(input){
    const commands = input.trim().split('\n').map(line => line.trim().split(' '))
    let i = 0
    let ilist = []
    let acctotal = 0
    while (!ilist.includes(i)){
    ilist.push(i)
        if (commands[i][0] == 'nop'){
            i++
        } else if (commands[i][0] == 'acc'){
            acctotal += parseInt(commands[i][1])
            i++
        } else if (commands[i][0] == 'jmp'){
            i += parseInt(commands[i][1])
        }
    }
    return acctotal
}