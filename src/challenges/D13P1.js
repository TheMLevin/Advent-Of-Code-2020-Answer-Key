/* export function D13P1(input){
    const file = input.trim().split('\n')
    const time = parseInt(file[0])
    const buses = file[1].trim().split(',').filter(num => num != "x").map(num => parseInt(num))
    let timediff = 0
    let cond = true
    let ID
    while(cond){
        for (let bus of buses){
            if ((time + timediff) % bus == 0){
                ID = bus
                cond = false
                break
            }
        }
        if (cond){
            timediff += 1
        }
    }
    return ID * timediff
} */