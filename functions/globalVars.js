export default () => { 
    const menuOptions = ["Iniciar", "Checkpoint", "Sair"]
    const options = ["Sim", "Nao"]
    const optionBack = ["Sim", "Nao (Voltar)"]
    const options1 = ["Onde eu estou? E quem e voce?", "Se eu nao deveria estar aqui, entao porque voce deveria? O que voce esta fazendo aqui? E quem e voce?"]
    const options2 = ["Entendo... Pelo que pude perceber, este lugar e bem perigoso. Poderia me mostrar a saida?", "Entendo... Agradeco o aviso mas eu gostaria de me aventurar pela masmorra tambem!"]
    const andarMenu = ["Aventurar-se na Masmorra", "Loja", "Itens", "Ver os status", "Voltar para o menu principal"]
    const battleOptions = ["Atacar", "Defender", "Itens", "Fugir"]
    const voltar = "Voltar"
    const player = { nome: '', idade: '', vida: 10, defesa: 1, ataque: 1, nivel: 1, xp: {amount: 0, limit: null}, dinheiro: 100 }
    player.xp.limit = player.nivel*10
    const slime = { nome: "Slime", vida: 5+player.nivel*2, defesa: 1+player.nivel, ataque: 1+player.nivel, xp: 1+player.nivel, dinheiro: 10+player.nivel*5 }
    const goblin = { nome: "Goblin", vida: 6+player.nivel*2, defesa: 2+player.nivel, ataque: 2+player.nivel, xp: 1+player.nivel, dinheiro: 10+player.nivel*5 }
    const orc = { nome: "Orc", vida: 6+player.nivel*2, defesa: 2+player.nivel, ataque: 2*player.nivel, xp: 2+player.nivel, dinheiro: 20+player.nivel*5 }
    const ogro = { nome: "Ogro", vida: 7+player.nivel*2, defesa: 3+player.nivel, ataque: 3+player.nivel, xp: 2+player.nivel, dinheiro: 25+player.nivel*5 }
    const mimico = { nome: "Mimico", vida: 8+player.nivel*2, defesa: 2+player.nivel, ataque: 2+player.nivel, xp: 4+player.nivel, dinheiro: 50+player.nivel*5 }
    const inimigos = [slime, goblin, orc, ogro, mimico]
    let primeiraCompra = false
    let escolha

    return {
        player,
        inimigos,
        primeiraCompra,
        andarMenu,
        battleOptions,
        menuOptions,
        options,
        options1,
        optionBack,
        options2,
        escolha,
        voltar
    }

}