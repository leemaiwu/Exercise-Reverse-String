function solution(str) {
    let strArray = str.split('')
    let backward = strArray.reverse().join('')
  return backward
}

console.log(solution('world')) // dlrow


// Alternate Solution


const reverse = (str) => {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverse('word')) // drow


// Alternate Solution


const reversed = (str) => str.split('').reverse().join('')

console.log(reversed('hello')) // olleh
