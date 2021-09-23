import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../functions/globalVars.js';
import main from './index.js'
import loja from './loja.js'
import searchFunction from '../functions/searchFunction.js';

let { optionBack, escolha, andarMenu} = globalVars()

export default async function andar(player, primeiraCompra) {
    console.clear()
    if (player.xp.amount >= player.xp.limit) {
        player.xp.amount = 0
        player.ataque++
        player.defesa++
        player.vida++
        player.dinheiro += player.nivel*100 
        player.nivel++
        await breakWords("Parabéns! Você atingiu o nível " + player.nivel + "!\n\n+1 ATK\n+1 HP\n+1 DEF\n+"+ ((player.nivel*100)-100) + " Moedas"+"\n\nPressione qualquer botao para continuar...")
        player.xp.limit = player.nivel*10
        readlineSync.keyInPause("")
    }
    console.clear()
    console.log("===============")
    console.log("|---ANDAR 1---|")
    console.log("===============")
    escolha = readlineSync.keyInSelect(andarMenu, "Escolha uma destas opcoes: ", { cancel: false, })
    switch (escolha) {
        case 0:
            searchFunction(player, primeiraCompra)
            break;
    
        case 1:
            await loja(player, primeiraCompra)
            await andar(player, primeiraCompra)
            break;

        case 2:

            break;

        case 3:
            console.clear()
            console.log("Status:\n")
            console.log("=== " + player.nome + " -> " + player.idade + " Anos" + " ===")
            console.log("\nHP: " + player.vida)
            console.log("ATK: " + player.ataque)
            console.log("DEF: " + player.defesa)
            console.log("NVL: " + player.nivel + " ---> " + player.xp.amount + "XP/" + player.xp.limit + "XP") 
            console.log("DINHEIRO: " + player.dinheiro)
            console.log("\nPressione qualquer botao para voltar...")
            readlineSync.keyInPause("")
            return andar(player, primeiraCompra)
        
        case 4:
            await breakWords("Voce tem certeza que deseja voltar para o menu principal?")
            escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
            switch (escolha) {
              case 0:
                  console.clear()
                  return main(player, primeiraCompra)

              case 1:
                console.clear()
                return andar(player, primeiraCompra)
            }
            break;
    }

}