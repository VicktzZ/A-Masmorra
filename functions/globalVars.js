export default () => { 
    const menuOptions = [
        "Iniciar",
        "Checkpoint",
        "Sair"
    ]
    
    const options = [
        "Sim",
        "Nao"
    ]

    const optionBack = [
        "Sim",
        "Nao (Voltar)"
    ]

    const options1 = [
        "Onde eu estou? E quem e voce?",
        "Se eu nao deveria estar aqui, entao porque voce deveria? O que voce esta fazendo aqui? E quem e voce?"
    ]

    const options2 = [
        "Entendo... Pelo que pude perceber, este lugar e bem perigoso. Poderia me mostrar a saida?",
        "Entendo... Agradeco o aviso mas eu gostaria de me aventurar pela masmorra tambem!"
    ]
    
    const andarMenu = [
        "Aventurar-se na Masmorra",
        "Loja",
        "Itens",
        "Ver os status",
        "Voltar para o menu principal"
    ]
    
    const battleOptions = [
        "Atacar",
        "Defender",
        "Itens",
        "Fugir"
    ]
    
    const pocoesOptions = [
        "Pocao de Cura",
        "Pocao de Forca",
        "Pocao da Invencibilidade",
        "Super Pocao"
    ]

    const voltar = "Voltar"
    
    const player = { 
        nome: '',
        idade: '',
        vida: 15,
        defesa: 1,
        ataque: 1,
        nivel: 1,
        xp: { 
            amount: 0,
            limit: null 
        },
        dinheiro: 100 
    }
    
    player.xp.limit = player.nivel*10

    const slime = { 
        nome: "Slime",
        vida: 5*(player.nivel),
        defesa: 1+player.nivel,
        ataque: 1+player.nivel,
        xp: 1+(player.nivel),
        dinheiro: 10
    }

    const rato = { 
        nome: "Rato",
        vida: 5*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 2+player.nivel,
        xp: 1+(player.nivel),
        dinheiro: 10
    }
                     
    const morcego = {
        nome: "Morcego",
        vida: 6*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 2*player.nivel,
        xp: 2+(player.nivel),
        dinheiro: 20
    }

    const lobo = { 
        nome: "Lobo",
        vida: 7*(player.nivel),
        defesa: 3+player.nivel, 
        ataque: 3+player.nivel, 
        xp: 2+(player.nivel), 
        dinheiro: 25 
    }

    // EVENT BOSS

    const lobo_alfa = { 
        nome: "Lobo Alfa",
        vida: 7*(player.nivel)*2,
        defesa: 3+player.nivel*2, 
        ataque: 3+player.nivel*2, 
        xp: 2+(player.nivel)*2, 
        dinheiro: 25*2
    }

    // EPECIAL ENEMY

    const mimico = { 
        nome: "Mimico",
        vida: 8*(player.nivel), 
        defesa: 2+player.nivel, 
        ataque: 2+player.nivel, 
        xp: 4+(player.nivel), 
        dinheiro: 100+player.nivel*10
    }
    
    // 2 Andar

    const aranha = {
        nome: "Aranha",
        vida: 12*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 3+player.nivel,
        xp: 5+(player.nivel),
        dinheiro: 40
    }

    const esqueleto = {
        nome: "Esqueleto",
        vida: 13*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 3+player.nivel,
        xp: 5+(player.nivel),
        dinheiro: 45
    }

    const goblin = {
        nome: "Goblin",
        vida: 14*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 4+player.nivel,
        xp: 6+(player.nivel),
        dinheiro: 50
    }

    const fanstasma = {
        nome: "Fantasma",
        vida: 16*(player.nivel),
        defesa: 2+player.nivel,
        ataque: 5+player.nivel,
        xp: 6+(player.nivel),
        dinheiro: 55
    }

    // EVENT BOSS

    const aparicao = {
        nome: "Aparicao",
        vida: 16*(player.nivel),
        defesa: 2+player.nivel*2,
        ataque: 5+player.nivel*2,
        xp: 6+(player.nivel)*2,
        dinheiro: 55*2
    }

    // 3 Andar 

    const homem_lagarto = {
        nome: "Homem Lagarto",
        vida: 18*(player.nivel),
        defesa: 3+player.nivel,
        ataque: 5+player.nivel,
        xp: 6+(player.nivel),
        dinheiro: 60
    }

    const orc = {
        nome: "Orc",
        vida: 20*(player.nivel),
        defesa: 3+player.nivel,
        ataque: 5+player.nivel,
        xp: 7+(player.nivel),
        dinheiro: 70
    }

    const ogro = {
        nome: "Ogro",
        vida: 22*(player.nivel),
        defesa: 3+player.nivel,
        ataque: 6+player.nivel,
        xp: 7+(player.nivel),
        dinheiro: 80
    }

    const minotauro = {
        nome: "Minotauro",
        vida: 25*(player.nivel),
        defesa: 3+player.nivel,
        ataque: 6+player.nivel,
        xp: 8+(player.nivel),
        dinheiro: 90
    }

    // EVENT BOSS

    const quimera = {
        nome: "Quimera",
        vida: 25*(player.nivel),
        defesa: 3+player.nivel*2,
        ataque: 7+player.nivel*2,
        xp: 8+(player.nivel)*2,
        dinheiro: 90*2
    }

    // Boss final

    const dragao = {
        nome: "Dragão Primordial",
        vida:50*(player.nivel),
        defesa:5+player.nivel,
        ataque:8+player.nivel,
        xp:10+(player.nivel),
        dinheiro:200+player.nivel*10,
    }

    const inimigos1 = [slime, rato, morcego, lobo, lobo_alfa, mimico]
    const inimigos2 = [aranha, esqueleto, goblin, fanstasma, aparicao]
    const inimigos3 = [homem_lagarto, orc, ogro, minotauro, quimera, dragao]
    const inimigos = [inimigos1, inimigos2, inimigos3]
    let primeiraCompra = false
    let escolha, floor, j

    return {
        player,
        inimigos,
        primeiraCompra,
        floor,
        j,
        pocoesOptions,
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