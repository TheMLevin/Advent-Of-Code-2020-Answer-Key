export function D6P1(input){
    const groups = input.trim().split('\n\n').map(line => [...new Set(line.trim().replaceAll('\n', ''))])
    return groups.map(group => group.length).reduce((sum, num) => sum + num, 0)
}