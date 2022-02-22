import breakWords from "../breakWords.js";
import { battle } from "./battleFunction.js";

export default async function attack(player, primeiraCompra, i, j, inimigos) {
  await breakWords(`Voce atacou ${inimigos[i][j].nome.toUpperCase()}! -${player.ataque} HP!\n`);
  inimigos[i][j].vida -= player.ataque
  setTimeout(() => {
    return battle(player, primeiraCompra, i, j, inimigos[i][j]);
  }, 1);
}
