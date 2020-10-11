//buatlah arrow function volume balok & kubus, gunakan rest parameter di functionnya, lalu tampilkan hasil perhitungannya dengan template literal
// rumus volume balok = p x l x t
//p = 9
//l = 8
//t = 10

const volumeBalok = (p,l,t) => {
    return p * l * t
}

console.log(volumeBalok(8,9,10))

//rumus volume kubus = sisi x sisi x sisi
//sisi = 12
const volumeKubus = (a) => {
    return a*a*a
}

console.log(volumeKubus(12))
