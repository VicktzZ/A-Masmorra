import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../functions/globalVars.js'
import tableStatus from '../functions/tableFunction.js'

let {optionBack, escolha} = globalVars()
let espada = 50
let escudo = 50 
let armadura = 50
let coinCounter = 0
export default async function loja(player, primeiraCompra) {
    
    let lojaEquipamento1 = [`${espada} Moedas - Espada (+1 ATK)`, `${armadura} Moedas - Armadura (+2 HP)`, `${escudo} Moedas - Escudo (+1 DEF)`, "Sair"]
    
    console.clear()
    tableStatus(player)
    escolha = readlineSync.keyInSelect(lojaEquipamento1, "Dinheiro disponivel: " + player.dinheiro, { cancel: false, })
    switch (escolha) {
        case 0:
            await breakWords("Voce deseja comprar ESPADA?")
            escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
            switch (escolha) {
                case 0:
                    if (player.dinheiro < espada) {
                        await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    } else {
                        player.dinheiro -= espada
                        coinCounter += espada 
                        player.ataque++
                        espada += 75 + (player.nivel*10)
                        await breakWords("Parabens! Voce adquiriu ESPADA (+1 ATK)\n\nATK total: " + player.ataque + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    }

                case 1:
                    console.clear()
                    return loja(player, primeiraCompra)
            }

            break;

        case 1:
            await breakWords("Voce deseja comprar ARMADURA?")
            escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
            switch (escolha) {
                case 0:
                    if (player.dinheiro < armadura) {
                        await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    } else {
                        player.dinheiro -= armadura
                        coinCounter += armadura
                        player.vida += 2
                        armadura += 50 + (player.nivel*10)
                        await breakWords("Parabens! Voce adquiriu ARMADURA (+2 HP)\n\nHP total: " + player.vida + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    }

                case 1:
                    console.clear()
                    return loja(player, primeiraCompra)
            }

            break;

        case 2:
            await breakWords("Voce deseja comprar ESCUDO?")
            escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
            switch (escolha) {
                case 0:
                    if (player.dinheiro < escudo) {
                        await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    } else {
                        player.dinheiro -= escudo
                        coinCounter += escudo
                        player.defesa++
                        escudo += 50 + (player.nivel*10)
                        await breakWords("Parabens! Voce adquiriu ESCUDO (+1 DEF)\n\nDEF total: " + player.defesa + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                        readlineSync.keyInPause("")
                        console.clear()
                        return loja(player, primeiraCompra)
                    }

                case 1:
                    console.clear()
                    return loja(player, primeiraCompra)
            }

            break;

        case 3:
            if (primeiraCompra == false) {
                if (player.dinheiro < 100) {
                    await breakWords("Sair da loja?")
                    escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes", {cancel: false})
                    switch (escolha) {
                        case 0:
                            primeiraCompra = true
                            return player, primeiraCompra
                    
                        case 1:
                            console.clear
                            return loja(player, primeiraCompra)
                    }
                } else {
                    await breakWords('"Ei! Eu trouxe voce aqui para voce conseguir equipamentos para a masmorra! Nao esta pensando em ir desarmado esta?"\nPressione qualquer botao para continuar...')
                    readlineSync.keyInPause("")
                    console.clear()
                    return loja(player, primeiraCompra);
                }
            } else {
                return player, primeiraCompra
            }
    }
}