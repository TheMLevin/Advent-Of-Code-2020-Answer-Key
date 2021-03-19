/* export function D13P2(input){
    const buses = input.trim().split('\n')[1].trim().split(',').map((num, id) => [id, num]).filter(num => num[1] != "x").map((id, num) => [id, parseInt(num)])
    let final = buses.shift();
    for (let bus of buses){
        let i = 1
        while(true){
            let time = final[1] * i + final[0]
            if ((time + bus[0]) % bus[1] == 0) break;
            i++
            console.log(i)
        }
        final = time, final[1] * bus[1]
        console.log(final)
    }
    return final[0]
} */