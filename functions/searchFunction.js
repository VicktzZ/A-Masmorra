import breakWords from './breakWords.js'
import { battleFunction } from './battleFunctions/battleFunction.js'
import chestFound from './chestFound.js';


export default async function searchFunction(player, primeiraCompra) {
    
    let randomNumber = Math.floor(Math.random() * 10) + 1

    await breakWords("Procurando...")
    setTimeout(async () => {
        await breakWords("Procurando...")
        setTimeout(async () => {
            await breakWords("Procurando...")
        }, 500);
    }, 500);

    setTimeout(async () => {
        if (randomNumber >= 4) {
            await battleFunction(player, primeiraCompra)
        } else {
            if (randomNumber <= 3) {
                await chestFound(player, primeiraCompra)
            }
        }
    }, 3200);
}