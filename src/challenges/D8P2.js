export function D8P2(input){
    const commands = input.trim().split('\n').map(line => line.trim().split(' '))
    
    function evaluate(acommands, ilist, i, acctotal){
        while (!ilist.includes(i)){
            if(typeof acommands[i] != 'undefined'){
                ilist.push(i)
                if (acommands[i][0] == 'nop'){
                    i++
                } else if (acommands[i][0] == 'acc'){
                    acctotal += parseInt(acommands[i][1])
                    i++
                } else if (acommands[i][0] == 'jmp'){
                    i += parseInt(acommands[i][1])
                }
            } else {
                if (i > 0){
                    return [true, acctotal]
                }
            }
        }
        return [false]
    }

    let i = 0
    let ilist = []
    let acctotal = 0
    while (!ilist.includes(i)){
        if (commands[i][0] == 'nop'){
            ilist.push(i)
            i++
        } else if (commands[i][0] == 'acc'){
            acctotal += parseInt(commands[i][1])
            ilist.push(i)
            i ++
        } else if (commands[i][0] == 'jmp'){
            let acommands = commands.slice(0,i).concat([['nop', '+0']]).concat(commands.slice(i + 1))
            let test = evaluate(acommands, ilist.slice(), i, acctotal)
            if (test[0]){
                return test[1]
            }
            i += parseInt(commands[i][1])
        }
    }
    return "Good"
}