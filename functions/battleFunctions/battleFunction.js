import breakWords from "../breakWords.js";
import readlineSync from "readline-sync";
import globalVars from "../globalVars.js";
import attack from "./attackFunction.js";
import andar from "../../script/andar.js";

let { escolha, inimigos, battleOptions, options } = globalVars();
export async function battle(player, primeiraCompra, i) {
  console.log("\n===" + inimigos[i].nome + "===");
  console.log("HP: " + inimigos[i].vida);
  console.log("ATK: " + inimigos[i].ataque);
  console.log("DEF: " + inimigos[i].defesa);

  escolha = readlineSync.keyInSelect(battleOptions, "SUA vez", {
    cancel: false,
  });
  switch (escolha) {
    case 0:
      await attack(player, primeiraCompra, i);
      break;

    case 1:
      break;

    case 2:
      break;

    case 3:
      fuga(player, primeiraCompra)
  }
}

export async function battleFunction(player, primeiraCompra) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber >= 1 && randomNumber <= 3) {
    await breakWords("Voce encontrou um SLIME!");
    setTimeout(() => {
        battle(player, primeiraCompra, 0);
    }, 500);
  } else {
    if (randomNumber >= 4 && randomNumber <= 6) {
      await breakWords("Voce encontrou um GOBLIN!");
      setTimeout(() => {
          battle(player, primeiraCompra, 1);

      }, 500);
    } else {
      if (randomNumber === 7 || randomNumber === 8) {
        await breakWords("Voce encontrou um ORC!");
        setTimeout(() => {
            battle(player, primeiraCompra, 2);

        }, 500);
      } else {
        if (randomNumber === 9 || randomNumber === 10) {
          await breakWords("Voce encontrou um OGRO!");
          setTimeout(() => {
              battle(player, primeiraCompra, 3);
          }, 500);
        }
      }
    }
  }
}

async function fuga(player, primeiraCompra, i) {
  await breakWords("Tentar fugir?")
  escolha = readlineSync.keyInSelect(options, "Escolha uma destas opcoes:", { cancel: false })
  switch (escolha) {
    case 0:
      let fuga = Math.floor(Math.random() * 10) + 1;
            if (fuga >= 7) {
              await breakWords("Voce fugiu!\nPressione qualquer botao para continuar...");
              readlineSync.keyInPause("")
              return andar(player, primeiraCompra);
            } else if (fuga <= 6) {
              await breakWords(
                "O inimigo impossibilitou todas suas rotas de fuga! Mate-o ou morra tentando!\nPressione qualquer botao para continuar..."
              );
              readlineSync.keyInPause("");
              battle(player, primeiraCompra, i);
            }
      break;
  
    case 1:
      return battle(player, primeiraCompra, i)
  }
}
