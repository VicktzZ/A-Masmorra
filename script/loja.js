import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../functions/globalVars.js'
import tableStatus from '../functions/tableFunction.js'

let {optionBack, escolha} = globalVars()
let espada = 50
let escudo = 50 
let armadura = 50
let healPotion = 150
let strPotion = 150
let invPotion = 150
let superPotion = 900
let coinCounter = 0

export default async function loja(player, primeiraCompra) {
    
    let lojaEquipamento1 = [`${espada} Moedas - Espada (+1 ATK)`, `${armadura} Moedas - Armadura (+2 HP)`, `${escudo} Moedas - Escudo (+1 DEF)`, "Pocoes", "Sair"]
    let lojaPocoes = [`${healPotion} Moedas - Pocao de cura (Cura 33% da sua vida total)`, `${strPotion} Moedas - Pocao de forca (Multiplica sua forca por 1.5x por 2 turnos)`, `${invPotion} Moedas - Pocao de invencibilidade (Voce nao tomara dano no proximo ataque)`, `${superPotion} Moedas - Super pocao (Status de todas as pocoes 2x (66% de cura, 3x de dano por 2 turnos e 2 turnos sem tomar dano))`, "Voltar"]
    
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

            (async function potions(player, primeiraCompra) {
                escolha = readlineSync.keyInSelect(lojaPocoes, 'Escolha uma dessas oopcoes', { cancel:false })
                switch (escolha) {
                    case 0:
                        
                        await breakWords("Voce deseja comprar POCAO DE CURA?")
                        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
                        switch (escolha) {
                            case 0:
                                if (player.dinheiro < healPotion) {
                                    await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return potions(player, primeiraCompra)
                                } else {
                                    player.dinheiro -= healPotion
                                    coinCounter += healPotion
                                    player.inv.healPotion ++
                                    healPotion += 50 + (player.nivel*10)
                                    await breakWords("Parabens! Voce adquiriu POCAO DE CURA\n\nInventario: " + player.inv + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return potions(player, primeiraCompra)
                                }

                            case 1:
                                console.clear()
                                return potions(player, primeiraCompra)
                        }

                        break;
                
                    case 1:

                        await breakWords("Voce deseja comprar POCAO DE FORCA?")
                        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
                        switch (escolha) {
                            case 0:
                                if (player.dinheiro < strPotion) {
                                    await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return potions(player, primeiraCompra)
                                } else {
                                    player.dinheiro -= strPotion
                                    coinCounter += strPotion
                                    player.inv.strPotion ++
                                    strPotion += 50 + (player.nivel*10)
                                    await breakWords("Parabens! Voce adquiriu POCAO DE FORCA\n\nInventario: " + player.inv + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return potions(player, primeiraCompra)
                                }

                            case 1:
                                console.clear()
                                return potions(player, primeiraCompra)
                        }


                        break;
                    case 2:
                
                        await breakWords("Voce deseja comprar POCAO DE INVENCIBILIDADE?")
                        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
                        switch (escolha) {
                            case 0:
                                if (player.dinheiro < invPotion) {
                                    await breakWords("Dinheiro insuficiente!\nPressione qualquer botao para voltar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return loja(player, primeiraCompra)
                                } else {
                                    player.dinheiro -= healPotion
                                    coinCounter += healPotion
                                    player.inv.healPotion ++
                                    healPotion += 50 + (player.nivel*10)
                                    await breakWords("Parabens! Voce adquiriu POCAO DE CURA\n\nInventario: " + player.inv + "\nDinheiro total: " + player.dinheiro + "\nPressione qualquer botao para continuar...")
                                    readlineSync.keyInPause("")
                                    console.clear()
                                    return potions(player, primeiraCompra)
                                }

                            case 1:
                                console.clear()
                                return potions(player, primeiraCompra)
                        }


                        break;
                    case 3:    
                        return andar(player, primeiraCompra)
                        break;
                }
            })()

        case 4:
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