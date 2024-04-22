console.log("Javascript")
let nome = "Nadja"

console.log(10 + 20)

let name = "Luiza" /* variaveis no mesmo contesto nao são aceitas caso precise modificalas para nao dar conflito.*/
alert(name)

/*//comenta uma única linha
/*comentários de  varias linhas
*/

function greet(){
    let nome = "Luiza"
    console.log("Helo, " + nome)  /*isso funcionara pos 'nome' esta dentro do escopo da função greet*/
}
