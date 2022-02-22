import breakWords from "./breakWords.js";
import readlineSync from 'readline-sync'
import { keyIn } from 'readline-sync';
import globalVars from './globalVars.js'
import andar from "../script/andar.js";
import { battle } from "./battleFunctions/battleFunction.js";

let { options, escolha } = globalVars()

async function falhou(player, primeiraCompra) {
    await breakWords('RESPOSTA ERRADA! Infelizmente quando o enigma foi respondido incorretamente, uma armadilha acionou fazendo com que voce fosse obrigado a fugir de maos vazias!\nPressione qualuqer botao para continuar...')
    readlineSync.keyInPause("")
    return andar(player, primeiraCompra)
}

async function conseguiu(player, primeiraCompra) {
    await breakWords(`PARABENS! Voce respondeu o enigma corretamente e isto lhe proporcinou uma recompensa!\n\n+${player.nivel*5+7} XP\n+${player.nivel*100} Dinheiro\n\nPressione qualquer botao para continuar...`)
    player.xp.amount += player.nivel*5+7
    player.dinheiro += player.nivel * 100
    readlineSync.keyInPause("")
    return andar(player, primeiraCompra)
}

async function resgate(player, primeiraCompra, floor) {
    await breakWords('Você encontrou um mineiro sendo atacado na masmorra! Deseja ajudar?')
    escolha = readlineSync.keyInSelect(options, 'Escolha uma dessas opcoes:', {cancel: false})
    switch (escolha) {
        case 0:
            console.clear()
            await battle(player, primeiraCompra, floor, 4, 0)
            break;
    
        case 1:
            await breakWords('Você decidiu nao ajudar o mineiro!\nPressione qualquer botao para continuar...')
            readlineSync.keyInPause("")
            return andar(player, primeiraCompra)
    }
}
async function puzzle(player, primeiraCompra) {
    async function puzzle_regua(player, primeiraCompra) {
        let randomMax = Math.floor(Math.random() * 20 + 12) 
        let randomMax2 = Math.floor(Math.random() * 20 + 12) 
        let randomArr = Math.floor(Math.random() * 4)
        let randomMin = Math.floor(Math.random() * 10) + 1
        
        if (randomMin == randomMax2) {
            randomMax += randomMax * 1.5
        } else if (randomMax2 < randomMin+5){
            randomMax += Math.floor(randomMax * 1.5)
        }

        if (randomMax2 >= randomMax) {
            randomMax += Math.floor(randomMax * 1.5)
        }

        let operationOptions = [`Ache a DIFERENÇA entre os numeros.\nFormula: ${randomMax2} - ${randomMin}`, `Ache o RESTO da divisao entre os numeros.\nFormula: ${randomMax2} % ${randomMin}`, `Ache a MEDIA ARITIMETICA entre os numeros.\nFormula: (${randomMax2} + ${randomMin}) / 2\n\n(Se o numero for decimal, coloque apenas a primeira casa)`, `Ache a METADE (1/2) do maior numero e some com o menor.\nFormula: (${randomMax2}/2) + ${randomMin}\n\n(Se o numero for decimal, coloque apenas a primeira casa)`]
        await breakWords(`Nesta parede, você encontra uma "Régua" que contem uma escala de 0 até ${randomMax}. Do lado dela haviam os números ${randomMin} e ${randomMax2}.\nNo mesmo lado dizia: ${operationOptions[randomArr]}`)

        let MAX = randomMax;
        let MIN = 0;
        let value = 0;
        let key;
        console.log('\n' + (new Array(Math.floor(randomMax/5)+1)).join(' ') + '[Z] <- -> [X]  INSERIR: [SPACE]\n');
        while (true) {

            console.log('\x1B[1A\x1B[K|' +
            (new Array(value + 1)).join('-') + 'O' +
            (new Array(MAX - value + 1)).join('-') + '| ' + value
            );

            key = keyIn('', { hideEchoBack: true, mask: '', limit: 'zx ' });

            if (key === 'z') {
                if (value > MIN) { 
                    value--; 
                } 
            } else if (key === 'x') { 
                if (value < MAX) {
                     value++; 
                    } 
                } else break
        
        }

        async function check(player, primeiraCompra) {
         
            if (randomArr == 0) {

                if (value == (randomMax2-randomMin)) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else if (randomArr == 1) {
    
                if (value == (randomMax2%randomMin)) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else if (randomArr == 2) {
    
                if (value == (Math.floor((randomMax2+randomMin)/2))) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else if (randomArr == 3) {
    
                if (value == (Math.floor(randomMax2/2) + randomMin)) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else console.error('ALGO DE ERRADO NAO ESTA CERTO :(');

        }


        await check(player, primeiraCompra)

    }

    async function puzzle_mat(player, primeiraCompra) {
        let randomArr = Math.floor(Math.random() * 3)
        let value
        let arrOptions = [
            'x + x + x = 60\nx + y + y = 30\ny - z = 3\nx + y * z = ?',
            'x + (x/2) + x = 15\ny - (y/2) + x = 10\nz + z - (z/2) = 6\n(x/2) + ((x/2) + (z/2)) * (y/2) = ?',
            'Se um triângulo retângulo apresenta 3 cm e 4 cm como medidas dos catetos, qual a hipotenusa desse triângulo?\nFormula: a² = b² + c²'
        ]
        await breakWords(`Nessa parede esta escrito:\n\n${arrOptions[randomArr]}\n`)
        value = Number(readlineSync.questionInt('RESPOSTA: ', { limitMessage: 'Digite um numero valido!' }))

        async function check(player, primeiraCompra) {
         
            if (randomArr == 0) {

                if (value == 110) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else if (randomArr == 1) {
    
                if (value == 72) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }
    
            } else if (randomArr == 2) {
    
                if (value == 5) {
                    await conseguiu(player, primeiraCompra)
                } else {
                    await falhou(player, primeiraCompra)
                }

            } else console.error('ALGO DE ERRADO NAO ESTA CERTO :(');

        }

        await check(player, primeiraCompra)
    }

    await breakWords('Você encontra uma espécie de enigma na parede da masmorra. \nDeseja investigar?')
    escolha = readlineSync.keyInSelect(options, 'Escolha uma dessas opcoes:', {cancel: false})
    switch (escolha) {
        case 0:
            let randomNumber2 = Math.floor(Math.random() * 10) + 1
            if (randomNumber2 >= 7) {
                await puzzle_mat(player, primeiraCompra)
            } else {
                await puzzle_regua(player, primeiraCompra)
            }
            break;
    
        case 1:
            await breakWords('Você decidiu nao investigar o enigma!\nPressione qualquer botao para continuar...')
            readlineSync.keyInPause("")
            return andar(player, primeiraCompra)
    }
}

export default async function eventos(player, primeiraCompra, floor){
    let randomNumber = Math.floor(Math.random() * 10) + 1
    if (randomNumber >= 7) {  
        await resgate(player, primeiraCompra, floor)
    } else {
        await puzzle(player, primeiraCompra, floor)
    }
}