export function D2P2(input){
    const lines = input.trim().split('\n')//.
    lines.forEach(num => {if(!RegExp('^[0-9]{1,2}-[0-9]{1,2}: [a-z]+\n?$').test(num)) throw "Invalid Input"});
    return "Good"
}