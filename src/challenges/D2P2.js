export function D2P2(input){
    const lines = input.trim().split('\n')
    lines.forEach(num => {if(!RegExp('^[0-9]{1,2}-[0-9]{1,2} [a-z]: [a-z]+\n?$').test(num)) throw "Invalid Input"});
    const passwords = lines.map(line => line.trim().split(' ').map(section => section.replace(':','')))

    let correct = 0;
    for (let password of passwords){
        const nums = password[0].split('-').map(num => parseInt(num) - 1)
        if ((password[2][nums[0]] == password[1] || password[2][nums[1]] == password[1]) && password[2][nums[0]] != password[2][nums[1]]){
            correct++;
        }
        
    }
    return correct
}