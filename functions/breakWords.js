function pausa(escritaPausada) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 40 * escritaPausada.length);

    let i = 0
    let arr = []

    let contador = (i) => {
      console.clear()
      arr.push(escritaPausada[i])
      console.log(arr.join(""))

      i++
    }

    let intervalo = setInterval(() => {

      if (escritaPausada.length === i) {
        clearInterval(intervalo)
        return 0
      } else {
        contador(i)
        i++
      }

    }, 30);

  });
}

async function asyncCall(escritaPausada) {
  await pausa(escritaPausada);
}

export default asyncCall