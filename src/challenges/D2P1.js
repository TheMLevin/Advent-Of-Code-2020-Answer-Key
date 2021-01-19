export function D2P1(input){ 
    const passwords = input.trim().split('\n').map(line => line.trim().split(' ').map(section => section.replace(':','')))
    
    let correct = 0;
    for (let password of passwords){
        const nums = password[0].split('-').map(num => parseInt(num))
        const count = [...password[2].matchAll(RegExp(password[1], 'g'))].length
        correct += nums[0] <= count && count <= nums[1]
    }
    return correct
}