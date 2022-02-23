function randomNumberBetween(min = 2000, max = 7000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*function randomNumberAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`tempo esperados! ${randomNumberBetween()}`);
    }, randomNumberBetween());
  });
}*/


function randomNumberAsync() {
  const tempoDeEspera = randomNumberBetween();
  console.log(`vamos esperar ${tempoDeEspera} milisegundos!`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aleatorio = randomNumberBetween();
      console.log('numero aleatorio gerado', aleatorio);

      if (aleatorio < 3500) reject('numero mto baixo!');
      else resolve(aleatorio);
    }, tempoDeEspera);
  });
}

const vetorDePromise = [
  randomNumberAsync(),
  randomNumberAsync(),
  randomNumberAsync(),
];

// chamar usando async
/*(async () => {

})();*/

// chamar usando then/catch
/*
randomNumberAsync()
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err.message);
  });*/