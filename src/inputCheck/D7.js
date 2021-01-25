export function D7(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp("^[a-z ]+ bags contain(?: (?:[1-9]|no) (?:other|[a-z ]+) bags?,?)+\.$").test(line.trim()))
}