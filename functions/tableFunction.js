export default function tableStatus(player) {
    let sizes = ['+']
    let fill1 = `| ==== ${player.nome} -> ${player.idade} Anos ==== |`.split('')
    let fill2 = `| HP: ${player.vida}`.split('')
    let fill3 = `| ATK: ${player.ataque}`.split('')
    let fill4 = `| DEF: ${player.defesa}`.split('')
    let fill5 = `| NVL: ${player.nivel} ---> ${player.xp.amount}/${player.xp.limit}`.split('')
    let fill6 = `| DINHEIRO: ${player.defesa}`.split('')

    for (let m = 0; m < fill1.length; m++) {
        sizes.push('-')
        
        if (fill2.length != fill1.length) {
            fill2.push(' ')
        }

        if (fill3.length != fill1.length) {
            fill3.push(' ')
        }

        if (fill4.length != fill1.length) {
            fill4.push(' ')
        }
        
        if (fill5.length != fill1.length) {
            fill5.push(' ')
        }

        if (fill6.length != fill1.length) {
            fill6.push(' ')
        }
    }
  
    sizes.pop()
    sizes.pop()
    sizes.push('+')
  
    fill2.pop()
    fill2.push('|')
    fill3.pop()
    fill3.push('|')
    fill4.pop()
    fill4.push('|')
    fill5.pop()
    fill5.push('|')
    fill6.pop()
    fill6.push('|')
  
    fill1 = String(fill1).split(',').join("")
    fill2 = String(fill2).split(',').join("")
    fill3 = String(fill3).split(',').join("")
    fill4 = String(fill4).split(',').join("")
    fill5 = String(fill5).split(',').join("")
    fill6 = String(fill6).split(',').join("")
    sizes = String(sizes).split(',').join("")

    console.log(sizes);
    console.log(fill1);
    console.log(sizes);
    console.log(fill2);
    console.log(fill3);
    console.log(fill4);
    console.log(fill5);
    console.log(fill6);
    console.log(sizes);
}