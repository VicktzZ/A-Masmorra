import breakWords from './breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from './globalVars.js'
import main from '../script/index.js'
import andar from '../script/andar.js'


let codigoAndar = ""
let { optionBack, escolha} = globalVars()

export default async function checkpoint(player, primeiraCompra) {          
    console.clear()
    console.log("=========")
    console.log("CHEKPOINT")
    console.log("=========\n")
    console.log('E aqui onde voce pode voltar a onde estava sem precisar percorrer o caminho todo novamente!\nDigite a senha que lhe foi dada no andar em que parou para voltar a este mesmo andar do jeito que voce estava!\n(Escreva "voltar" se desejar voltar ao menu principal.)')
    codigoAndar = readlineSync.question("\nDigite o codigo do andar ou voltar se desejar voltar ao menu principal: ", {limit: ['andarNivel01', 'voltar', 'Voltar'], limitMessage: '$<lastInput> nao esta disponivel, tente novamente.'})
    
    if (codigoAndar === "voltar" || codigoAndar === "Voltar") {
      return main(player, primeiraCompra)
    } else {
      if (codigoAndar == "andarNivel01" || codigoAndar == "andarnivel01" || codigoAndar == "Andarnivel01") {
        await breakWords("Deseja avancar para o 1º Andar?")
        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes", {cancel: false})
        switch (escolha) {
          case 0:
            andar(player, primeiraCompra)
            break;
                
          case 1:
            return checkpoint(player, primeiraCompra)
        }
      } else if (codigoAndar == "andarNivel02" || codigoAndar == "andarnivel02" || codigoAndar == "Andarnivel02") {
        await breakWords("Deseja avancar para o 2º Andar?")
        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes", {cancel: false})
        switch (escolha) {
          case 0:
            andar(player, primeiraCompra)
            break;
                
          case 1:
            return checkpoint(player, primeiraCompra)
        }
      }
    }
  }