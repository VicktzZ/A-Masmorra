import breakWords from './breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from './globalVars.js';
import andar from '../script/andar.js';
import { battle } from './battleFunctions/battleFunction.js';

let { options, escolha } = globalVars()

export default async function chestFound(player, primeiraCompra) {
    
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let randomNumber2 = Math.floor(Math.random() * 10) + 1
    let randomMoeda = Math.floor(Math.random() * 50 + 51)
    
    await breakWords("Parabens! Voce encontrou um bau!\nDeseja abrir o bau?")
    escolha = readlineSync.keyInSelect(options, "Escolha uma destas opcoes:", { cancel: false })
    switch (escolha) {
        case 0:
            await breakWords("Voce abre o bau...")
            setTimeout(async () => {
                if (randomNumber >= 4) {
                    if (randomNumber2 >= 8) {
                        player.xp.amount += randomNumber + player.nivel
                        await breakWords("Voce achou um bau de XP! " + "+" + (randomNumber + player.nivel) + " XP!" + "\nNVL: " + player.nivel + " ---> " + player.xp.amount + "XP/" + player.xp.limit + "XP" + "\nPressione qualquer botao para continuar...")
                        readlineSync.keyInPause("")
                        return andar(player, primeiraCompra)
                    } else {
                        if (randomNumber2 <= 7) {
                            player.dinheiro += randomMoeda + player.nivel*5
                            await breakWords("Voce achou um bau de MOEDAS! " + "+" + (randomMoeda + player.nivel*5) + " MOEDAS!" + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                            readlineSync.keyInPause("")
                            return andar(player, primeiraCompra)
                        }
                    }
                } else {
                    if (randomNumber <= 3) {
                        await breakWords("Oh! Essa nao! parece que o bau que voce abriu na verdade era um mimico disfarcado!")
                        battle(player, primeiraCompra, 4)
                    }
                }
            }, 1500);
            break;

        case 1:
            await breakWords("Voce preferiu nao abrir o bau!\nPressione qualquer botao para continuar")
            readlineSync.keyInPause("")
            return andar(player, primeiraCompra)
    }

}