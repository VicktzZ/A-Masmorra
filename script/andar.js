import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../functions/globalVars.js';
import main from './index.js'
import loja from './loja.js'
import searchFunction from '../functions/searchFunction.js';
import { battle } from '../functions/battleFunctions/battleFunction.js';
import tableStatus from '../functions/tableFunction.js';

let { optionBack, escolha, andarMenu, floor, j} = globalVars()
floor = 1
let i = 1

export default async function andar(player, primeiraCompra) {

    if (arguments[2] === Number(arguments[2])) {
        floor = arguments[2]
        floor == 3 ? i = 6 : i = 3
    }

    if (arguments[3] === Number(arguments[3])) {
        let event_number = Number(arguments[3])
        if (event_number == 0) {
            player.xp.amount += Math.floor(player.nivel*3.5)
            player.dinheiro += Math.floor(200 * (player.nivel*0.5))
            await breakWords(`"Muito obrigado por me salvar!" - O mineiro diz.\n"Aqui! Fique com essas barras de ouro!"\n\nGanhou:\n+${Math.floor(200 * (player.nivel*0.5))} Moedas\n+${Math.floor(player.nivel*3.5)} XP`)
            return andar(player, primeiraCompra)
        } else if (event_number == 1) {
        
        } else {
            return andar(player, primeiraCompra)
        }
    } else {
        console.clear()
        async function levelup(x){
            player.xp.amount = 0 
            player.nivel ++
            player.ataque += x
            player.defesa += x
            player.vida += x
            player.dinheiro += player.nivel*150
            player.xp.limit = Math.floor((player.nivel*10)+(player.nivel*2)*player.nivel*0.5)
            
            await breakWords(`Parabéns! Você atingiu o nível ${player.nivel}!\n\n+${x} ATK\n+${x} HP\n+${x} DEF\n+${((player.nivel*100)-100)} Moedas\n\nPressione qualquer botao para continuar...`)
            readlineSync.keyInPause("")
        }    

        if (player.xp.amount >= player.xp.limit) {

            if (floor >= 6) {
                await levelup(3)    
            } else if (floor >= 3) {
                await levelup(2)
            } else if (floor >= 1) {
                await levelup(1)
            }
            
            i++
            if (i % 3 == 0) {
                floor++
                
                if (i == 12) {
                    await breakWords(`Voce ouve alguem lhe chamando:\n"Hey! Ola novamente ${player.nome}!" - Era Hella.\n"Parece que voce finalmente chegou ao fim!\nEste e o ulitmo andar da masmorra, nesse andar vive um dragao muito poderoso, entao tenha certeza de que voce esta muito bem equipado antes de enfrenta-lo!\n\nEu o aguardarei na sala de recompensas apos matar o dragao. Boa sorte!"\nPressione qualquer botao para continuar...`)
                    readlineSync.keyInPause('')
                    andar(player, primeiraCompra)
                } else {
                    await breakWords(`Muito bem! Você adquiriu nível suficiente para ir ao ${floor} ANDAR!\nUse o código "andarNivel0${floor}" para ir ao ${floor} andar quando quiser. (A dificuldade foi aumentada.)\nPressione qualquer botao para continuar...`)
                    readlineSync.keyInPause('')
                }

            } 
        }

        console.clear()
        if (i == 12) {
            console.log("==================")
            console.log(`|---BOSS FINAL---|`)
            console.log("==================")
        } else {
            console.log("===============")
            console.log(`|---ANDAR ${floor}---|`)
            console.log("===============")
        }
        escolha = readlineSync.keyInSelect(andarMenu, "Escolha uma destas opcoes: ", { cancel: false, })
        switch (escolha) {
            case 0:
                if (i == 12) {
                    await breakWords('Voce entra na camara e ve um enorme dragao:\n"Quem ousa interromper meu sono?"\nO dragao fica furioso e parte para cima de voce!')
                    setTimeout(() => {
                        battle(player, primeiraCompra, 2, 5, 1)
                    }, 500);
                } else {
                    searchFunction(player, primeiraCompra, floor-1, j)
                }
                break;
        
            case 1:
                await loja(player, primeiraCompra)
                await andar(player, primeiraCompra)
                break;

            case 2:

                break;

            case 3:
                console.clear()
                tableStatus(player)
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
}