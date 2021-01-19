export function D5(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[FB]{7}[RL]{3}$').test(line)) throw "Invalid Input"});
}