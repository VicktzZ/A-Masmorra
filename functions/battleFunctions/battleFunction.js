import breakWords from "../breakWords.js";
import readlineSync from "readline-sync";
import globalVars from "../globalVars.js";
import attack from "./attackFunction.js";
import andar from "../../script/andar.js";
import enemyAttack from "./enemyAttack.js";

let { escolha, inimigos, battleOptions, options } = globalVars();
let j
let enemyConunter = 0
export async function battle(player, primeiraCompra, i, j, event_number) {

  event_number = event_number || null
  function battleTable() {
    let sizes = ['+']
    let fill1 = `${inimigos[i][j].nome}`.split('')
    let fill2 = ` HP: ${inimigos[i][j].vida}`.split('')
    let fill3 = ` ATK: ${inimigos[i][j].ataque}`.split('')
    let fill4 = ` DEF: ${inimigos[i][j].defesa}`.split('')
    let anotherFillp = `${player.nome}`.split('')
    let anotherFill = `| HP: ${player.vida}`.split('')
    let anotherFill2 = `| ATK: ${player.ataque}`.split('')
    let anotherFill3 = `| DEF: ${player.defesa}`.split('')
    
    let fillpLength = anotherFillp.length
    let fillLength = fill1.length

    anotherFillp = anotherFillp.splice(0, 0)
    fill1 = fill1.splice(0, 0)

    for (let x = 0; x < fillpLength+2; x++) {
      anotherFillp.push('=')
    }

    
    for (let y = 0; y < fillLength+2; y++) {
      fill1.push('=')
    }

    anotherFillp.unshift('| ')
    fill1.unshift(' ')

    for (let x = 0; x < (fillpLength+fillLength); x++) {
      if (fillpLength < fillLength) {
        anotherFillp.push('=')
        
      } else if (fillLength < fillpLength) {
        fill1.push('=')

      } else {
        break
      }
    }
    
    anotherFillp.splice(Math.floor((fillpLength+3)/2), 1, ` ${player.nome} `)
    
    // fill1.splice(Math.floor((fillLength+3)/2), 1, ` ${inimigos[i][j].nome} `)
    // anotherFillp.pop()

    // for (let w = 0; w < (fill1.length+anotherFillp.length); w++) {
    //   if (anotherFillp.length < (fill1.length)) {
    //     anotherFillp.push(' ')
    //   } else if (fill1.length < (anotherFillp.length)) {
    //     fill1.push(' ')
    //   } else {
    //     break
    //   }
    // }

    anotherFillp.push(' ')
    fill1.push(' |')
  
    let newarrp = anotherFillp.concat(fill1)
    newarrp.splice(Math.floor(newarrp.length)/2, 1, '| ')
    newarrp = String(newarrp).split(',').join('')
  
    for (let m = 0; m < newarrp.length; m++) {
        sizes.push('-')
        fill2.push(' ')
        fill3.push(' ')
        fill4.push(' ')
    }
  
    fill2.splice((newarrp.length/2 - fill2.length))
    fill3.splice((newarrp.length/2 - fill3.length))
    fill4.splice((newarrp.length/2 - fill4.length))
  
    for (let n = 0; n < anotherFill.length; n++){
      if (anotherFill.length < fill2.length) {
          anotherFill.push(' ')
      } else break
    }

    fill2.pop()
    fill2.pop()
    fill2.pop()
    anotherFill.pop()
    anotherFill.push('|')
    
  
    for (let o = 0; o < anotherFill2.length; o++){
      if (anotherFill2.length < fill3.length) {
          anotherFill2.push(' ')
      }
    }
    fill3.pop()
    fill3.pop()
    fill3.pop()
    anotherFill2.pop()
    anotherFill2.push('|')
  
    for (let p = 0; p < anotherFill3.length; p++){
      if (anotherFill3.length < fill4.length) {
          anotherFill3.push(' ')
      }
    }
    fill4.pop()
    fill4.pop()
    fill4.pop()
    anotherFill3.pop()
    anotherFill3.push('|')
  
    sizes.pop()
    sizes.pop()
    sizes.push('+')
    
    fill2.push(' |')
    fill3.push(' |')
    fill4.push(' |')
  
    fill2 = String(fill2).split(',').join("")
    fill3 = String(fill3).split(',').join("")
    fill4 = String(fill4).split(',').join("")
    sizes = String(sizes).split(',').join("")
    anotherFill = String(anotherFill).split(',').join("")
    anotherFill2 = String(anotherFill2).split(',').join("")
    anotherFill3 = String(anotherFill3).split(',').join("")
  
    let newarr = String([anotherFill, fill2 ]).split(',').join('')
    let newarr2 = String([anotherFill2, fill3]).split(',').join('')
    let newarr3 = String([anotherFill3, fill4]).split(',').join('')
  
    console.log(sizes);
    console.log(newarrp);
    console.log(sizes);
    console.log(newarr);
    console.log(newarr2);
    console.log(newarr3);
    console.log(sizes);
  }

  if (inimigos[i][j].vida <= 0) {
    enemyConunter++
    for (let k = 0; k < inimigos.length; k++) {
      for (let l = 0; l < inimigos[k].length; l++) {
        inimigos[k][l].vida = Math.floor(globalVars().inimigos[k][l].vida*((player.nivel+1)*(0.5)))
        inimigos[k][l].dinheiro = globalVars().inimigos[k][l].dinheiro + (player.nivel*5) 
        inimigos[k][l].xp = Math.floor(globalVars().inimigos[k][l].xp + player.nivel*2)
      }
    }
    player.dinheiro += inimigos[i][j].dinheiro
    player.xp.amount += inimigos[i][j].xp
    await breakWords("Muito bem! Inimigo morto! +" + inimigos[i][j].xp + "XP e +" + inimigos[i][j].dinheiro + " moedas!\nPressione qualquer botao para continuar...")
    readlineSync.keyInPause("")
    return andar(player, primeiraCompra, event_number)
  }
  else {
    battleTable()

    escolha = readlineSync.keyInSelect(battleOptions, "SUA vez", {cancel: false,});
    switch (escolha) {
      case 0:
        attack(player, primeiraCompra, i, j, inimigos);
        enemyAttack(player, primeiraCompra, i, j, inimigos)
        break;

      case 1:
        break;

      case 2:
        break;

      case 3:
        fuga(player, primeiraCompra, i, j)
    }
  }
}
export async function battleFunction(player, primeiraCompra, floor) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber >= 1 && randomNumber <= 3) {
    j = 0
    await breakWords(`Voce encontrou um(a) ${inimigos[floor][0].nome.toUpperCase()}!\n`);
    setTimeout(() => {
        battle(player, primeiraCompra, floor, j);
    }, 500);
  } else {
    if (randomNumber >= 4 && randomNumber <= 6) {
      j = 1
      await breakWords(`Voce encontrou um(a) ${inimigos[floor][1].nome.toUpperCase()}!\n`);
      setTimeout(() => {
          battle(player, primeiraCompra, floor, 1);
      }, 500);
    } else {
      if (randomNumber === 7 || randomNumber === 8) {
        j = 2
        await breakWords(`Voce encontrou um(a) ${inimigos[floor][2].nome.toUpperCase()}!\n`);
        setTimeout(() => {
            battle(player, primeiraCompra, floor, 2);
        }, 500);
      } else {
        if (randomNumber === 9 || randomNumber === 10) {
          j = 3
          await breakWords(`Voce encontrou um(a) ${inimigos[floor][3].nome.toUpperCase()}!\n`);
          setTimeout(() => {
              battle(player, primeiraCompra, floor, 3);
          }, 500);
        }
      }
    }
  }
}

async function fuga(player, primeiraCompra, floor, j) {
  await breakWords("Tentar fugir?")
  escolha = readlineSync.keyInSelect(options, "Escolha uma destas opcoes:", { cancel: false })
  switch (escolha) {
    case 0:
      let fuga = Math.floor(Math.random() * 10) + 1;    
            if (fuga >= 6) {
              await breakWords("Voce fugiu!\nPressione qualquer botao para continuar...");
              readlineSync.keyInPause("")
              return andar(player, primeiraCompra);
            } else if (fuga <= 5) {
              await breakWords(
                "O inimigo impossibilitou todas suas rotas de fuga! Mate-o ou morra tentando!\nPressione qualquer botao para continuar...\n"
              );
              readlineSync.keyInPause("");
              console.clear()
              battle(player, primeiraCompra, floor, j);
            }
      break;
  
    case 1:
      return battle(player, primeiraCompra, floor, j)
  }
}
