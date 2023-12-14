
let nick = "Shaolin Matador de Porco"
let xp = 8001

if (xp <= 1000) {
    console.log("O Herói de nome " + nick + " está no nível ferro")
} else if (xp > 1000 && xp <= 2000) {
    console.log("O Herói de nome " + nick + " está no nível bronze")
} else if (xp > 2000 && xp <= 6000) {
    console.log("O Herói de nome " + nick + " está no nível prata")
} else if (xp > 6000 && xp <= 7000) {
    console.log("O Herói de nome " + nick + " está no nível ouro")
} else if (xp > 7000 && xp <= 8000) {
    console.log("O Herói de nome " + nick + " está no nível platina")
} else if (xp > 8000 && xp <= 9000) {
    console.log("O Herói de nome " + nick + " está no nível ascendente")
} else if (xp > 9000 && xp <= 10000) {
    console.log("O Herói de nome " + nick + " está no nível imortal")
} else if (xp > 10000) {
    console.log("O Herói de nome " + nick + " está no nível radiante")
}