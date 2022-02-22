import breakWords from './breakWords.js'
import { battleFunction } from './battleFunctions/battleFunction.js'
import chestFound from './chestFound.js';
import eventos from './eventos.js';


export default async function searchFunction(player, primeiraCompra, floor, j) {
    
    let randomNumber = Math.floor(Math.random() * 10) + 1

    await breakWords("Procurando...")
    setTimeout(async () => {
        await breakWords("Procurando...")
        setTimeout(async () => {
            await breakWords("Procurando...")
        }, 500);
    }, 500);
    setTimeout(async () => {
        if (randomNumber >= 5) {
            await battleFunction(player, primeiraCompra, floor, j)
        } else if (randomNumber >= 3) {
            await chestFound(player, primeiraCompra)
        } else {
            await eventos(player, primeiraCompra, floor)
        }
    }, 3200);
}