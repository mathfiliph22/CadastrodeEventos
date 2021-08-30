// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
let dataDoEvento = ("2021/09/15")
let dataAtual = ("2021/08/30")

if (dataAtual < dataDoEvento) {
    console.log("Cadastro Permitido")
} else {
    console.log("Data invalida, Cadastro não permitido")

}

// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

let Idade = "25"

if (Idade > 18 ) {
    console.log("Idade permitida para o evento")
} else {
    console.log("Cadastro negado, idade não pertmida") 
}

// Listar participantes e Palestrantes por evento


const listaDeParticipantes = [ "Carlos", "Clara", "Junior", "Cleidir", "Fernando", "Aldemir"]
const listaDePalestrantes = ["Maria", "Roberta", "Francisco", "Pablo"]

console.log(listaDeParticipantes)
console.log(listaDePalestrantes)

// Quantidade de participantes não pode ultrapassar 100

let Participantes = "6"

if(Participantes < 100 ) {
    console.log("Cadastro permitido, ainda há vagas ")
} else {
    console.log("Cadastro inválido, evento alcançou o limite")   
}

 




