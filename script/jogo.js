import breakWords from '../functions/breakWords.js'
import readlineSync from 'readline-sync'
import globalVars from '../functions/globalVars.js'
import main from './index.js'
import loja from './loja.js'
import andar from './andar.js'

let { options, optionBack, options1, options2, escolha } = globalVars()
export default async function jogo(player, primeiraCompra) {
  await breakWords('"Hm... O que e isso...? Quem e voce? O que está fazendo aqui? Esse lugar e muito perigoso!"\nPressione qualquer botao para continuar...')
  readlineSync.keyInPause("")
  await breakWords('"Essas ruinas foram abandonadas a muito tempo atras. Hoje, este lugar nao passa de um ninho de monstros!\nVocê não deveria estar aqui!"')

  escolha = readlineSync.keyInSelect(options1, "Escolha uma destas opcoes:", { cancel: false })
  switch (escolha) {
    case 0:
      await breakWords('"Eu sou Hella, uma nobre guerreira. Respondendo a sua pergunta anterior, voce esta na masmorra. A masmorra e uma antiga ruina onde contem todo tipo de tesouro,\nporem e muito perigosa, por isso voce nao deveria estar aqui!"')
      await Escolha1()
      break;
    case 1:
      await breakWords('"Eu sou Hella. Eu sou uma nobre guerreira e eu estou aqui para pegar tesouros! todavia, eu vim preparada para qualquer tipo de ocasiao.\nMas voce nao me parece preparado!"')
      await Escolha1()
      break;

  }

  async function Escolha1() {
    escolha = readlineSync.keyInSelect(options2, "Escolha uma destas opcoes:", { cancel: false })
    switch (escolha) {
      case 0:
        await breakWords('"Entao voce vai escutar o meu aviso?"')
        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes", { cancel: false })
        switch (escolha) {
          case 0:
            await breakWords('"Muito bem! Vou te mostrar a saida entao!"\nPressione qualquer botao para continuar...')
            readlineSync.keyInPause("")
            await breakWords("Depois de voce pedir com gentileza para Hella te tirar daquele lugar, ela imediatamente lhe mostra a saida.\nNo fim, voce ate saiu em seguranca, porem saiu de la de maos vazias.\n\nFinal Neutro '-'")

            console.log("\nDeseja tentar novamente?")

            escolha = readlineSync.keyInSelect(options, "Escolha uma destas opcoes:", { cancel: false })
            switch (escolha) {
              case 0:
                return main();

              case 1:
                await breakWords("OK, saindo do jogo...")
                return;
            }

          case 1:
            console.clear()
            return Escolha1()
        }

      case 1:
        await breakWords("Voce tem certeza disso?")
        escolha = readlineSync.keyInSelect(optionBack, "Escolha uma destas opcoes:", { cancel: false })
        switch (escolha) {
          case 0:
            return gameContinue();

          case 1:
            console.clear()
            return Escolha1()
        }
    }
  }

  async function gameContinue() {

    await breakWords('"Bom, se voce insite entao tudo bem! Antes disso, precisamos comprar alguns equipamentos para voce, ou voce nao vai durar 5 minutos aqui dentro.\nA proposito, Qual o seu nome?"')
    player.nome = readlineSync.question("\nDigite aqui como deseja ser chamado: ")

    await breakWords('"Muito bem ' + player.nome + '! E qual a sua idade?"')
    player.idade = readlineSync.questionInt("\nDigite aqui a sua idade: ", { limitMessage: '$<lastInput> <-- por favor, insira um numero inteiro.' })
    if (player.idade < 14) {
      await breakWords('"Nossa mas você ainda é só uma criança! Tem certeza que você está apto para entrar nessa masmorra? Bom, se você realmente quiser... Entao tudo bem! Me siga, Vamos la!"\nPressione qualquer botao para continuar...')
      readlineSync.keyInPause("")
    } else {
      if (player.idade < 18 && player.idade !== 16) {
        await breakWords('"Nossa, quase a mesma player.idade que a minha! Muito bem! Me siga, Vamos la!"\nPressione qualquer botao para continuar...')
        readlineSync.keyInPause("")
      } else {
        if (player.idade === 16) {
          await breakWords('"Olha so que surpresa! A Mesma player.idade que a minha! Muito bem! Me siga, vamos la!"\nPressione qualquer botao para continuar...')
          readlineSync.keyInPause("")
        } else {
          if (player.idade >= 18 && player.idade <= 39) {
            await breakWords('"Hm... Entao voce ja e um adulto ne? Bom, voce sabe se virar sozinho, mas por enquanto, me siga. Vamos la!"\nPressione qualquer botao para continuar...')
            readlineSync.keyInPause("")
          } else {
            if (player.idade >= 40 && player.idade <= 69) {
              await breakWords('"Nossa, voce ta um pouquinho velh- Ok, ok...! Desculpa, voce com certeza esta apto para entrar na masmorra. Me siga, vamos la!"\nPressione qualquer botao para continuar...')
              readlineSync.keyInPause("")
            } else {
              if (player.idade >= 70 && player.idade <= 100) {
                await breakWords('"O Senhor ja nao e idoso?! Voce tem certeza que esta apto a entrar na masmorra? Bom, tudo bem entao.. Me siga, vamos la!"\nPressione qualquer botao para continuar...')
                readlineSync.keyInPause("")
              } else {
                if (player.idade >= 101 && player.idade <= 115) {
                  await breakWords('"UAU! Você tem mais de 100 anos?! Eu não recomendaria um senhor de idade entrar na masmorra, mas ainda assim sua idade é impressionante! Vamos lá?"\nPressione qualquer botao para continuar...')
                  readlineSync.keyInPause("")
                } else {
                  await breakWords('"Meu Deus! Como voce ainda esta vivo?! Voce nao e humano? E de outra raca ou algo assim? Bom, mas se voce deseja entrar na masmorra, entao assim o farei. Me siga, vamos la!"\nPressione qualquer botao para continuar...')
                  readlineSync.keyInPause("")
                }
              }
            }
          }
        }
      }
    }

    await breakWords('Ainda dentro da masmorra, Hella te mostra uma loja de um ferreiro que vende alguns equipamentos uteis para aventureiros:\n\n"Vamos entrar!" - ela disse.\n\nPressione qualquer botao para continuar...')
    readlineSync.keyInPause("")
    await breakWords('"Para voce ficar bem equipado, voce precisara de dinheiro para comprar os equipamentos! Tome:"\n\nHella te deu 100 moedas.\n\n"Agora voce ja pode escolher o seu equipamento!"\nPressione qualquer botao para continuar...')
    readlineSync.keyInPause("")
    await breakWords('Voce entra na loja e e muito bem recebido:\n"Ola! Seja muito bem vindo(a)! O que vai querer?" - o ferreiro diz.\nPressione qualquer botao para continuar...')
    readlineSync.keyInPause("")

    await loja(player, primeiraCompra)
    primeiraCompra = true

    await breakWords('"Muito bem! Agora que voce esta preparado voce com certeza consegue se dar bem nessa masmorra! Bom, infelizmente eu vou indo, nos encontraremos novamente! Ah, quase ia me esquecendo, Tome cuidado por onde anda! Esse e o 1º andar, entao as coisas aqui ainda serao um pouco faceis, mas depois tudo comeca a dificultar!\n\nAdeus!"\nPressione qualquer botao para continuar...')
    readlineSync.keyInPause("")
    await breakWords('Voce conseguiu chegar ao 1º andar da masmorra!\nCheckpoint do 1º Andar desbloqueado! ---> andarNivel01 (Digite exatamente como esta ao lado)\n\nColoque esse codigo na aba de Checkpoint no menu principal para voltar de onde parou no 1º andar!\n\nPressione qualquer botao para continuar...')
    readlineSync.keyInPause("")
    console.clear()

    andar(player, primeiraCompra)
  }
}