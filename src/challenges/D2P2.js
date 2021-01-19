export function D2P2(input){
    const passwords = input.trim().split('\n').map(line => line.trim().split(' ').map(section => section.replace(':','')))

    let correct = 0;
    for (let password of passwords){
        const nums = password[0].split('-').map(num => parseInt(num) - 1)
        if ((password[2][nums[0]] == password[1] || password[2][nums[1]] == password[1]) && password[2][nums[0]] != password[2][nums[1]]){
            correct++;
        }
        
    }
    return correct
}