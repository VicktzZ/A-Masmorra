import breakWords from '../breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../globalVars.js';
import { battle } from './battleFunction.js'
import andar from '../../script/andar.js'

let {inimigos} = globalVars()

export default async function attack(player, primeiraCompra, i) { 

    if (inimigos[i].vida <= 0) {
        await breakWords("Muito bem! Inimigo morto! +" + inimigos[i].xp + "XP e +" + inimigos[i].dinheiro + " moedas!")
        player.dinheiro += inimigos[i].dinheiro
        player.xp.amount += inimigos[i].xp
        inimigos[i].vida = globalVars().inimigos[i].vida
        readlineSync.keyInPause("")
        return andar(player, primeiraCompra)
    } else {
        await breakWords("Voce atacou o inimigo! -" + player.ataque + "HP")
        inimigos[i].vida -= player.ataque
        return battle(player, primeiraCompra, i)
    }
}