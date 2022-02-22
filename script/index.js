import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import jogo from './jogo.js'
import globalVars from '../functions/globalVars.js'
import checkpoint from '../functions/checkpoint.js'

let { menuOptions, optionBack, escolha, player } = globalVars()
export default async function main({primeiraCompra} = globalVars()) {

  primeiraCompra = true
  player.dinheiro = 999999
  console.clear()
  console.log("===========")
  console.log("A MASMORRA")
  console.log("===========")

  player.xp.limit = (player.nivel*10)+(player.nivel*2)
  escolha = readlineSync.keyInSelect(menuOptions, "Escolha uma destas opcoes:", { cancel: false })

  switch (escolha) {
    case 0:
      await jogo(player, primeiraCompra)
      break;

    case 1:
      if (primeiraCompra === false) {
        await breakWords("Funcao bloqueada! Avance mais no jogo para desbloquear CHEKPOINTS!\nPressione qualquer botao para voltar...")
        readlineSync.keyInPause("")
        return main();
      } else {
        checkpoint(player, primeiraCompra)
      }

      break;

    case 2:
      await breakWords("Voce tem certeza que deseja sair do jogo? (Todo progresso sera perdido!)")
      escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
      switch (escolha) {
        case 0:
          return;

        case 1:
          console.clear()
          main()
      }
  }
}

main()