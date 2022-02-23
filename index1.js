
function randomNumberBetween(min = 2000, max = 7000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
Criar função que que retorna uma Promise com um
número aleatório após esperar x milisegundos
(criar tempo de espera e número aleatório usando randomNumberBetween)
*/
function randomNumberAsync() {
  const tempoDeEspera = randomNumberBetween();
  console.log(`vamos esperar ${tempoDeEspera} milisegundos!`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('passou do tempo!');
    }, 4000);

    setTimeout(() => {
      const aleatorio = randomNumberBetween();
      console.log('numero aleatorio gerado', aleatorio);

      if (aleatorio < 3500) reject('numero mto baixo!');
      else resolve(aleatorio);
    }, tempoDeEspera);
  });
}

// chamar usando async
/*(async () => {
  try {
    const aleatorio = await randomNumberAsync();
    console.log('valor da promise resolvido', aleatorio);
  } catch (err) {
    console.info('algo deu errado', err);
  }
})();*/

// chamar usando then/catch
/*randomNumberAsync()
  .then((resultado) => {
    console.log(`[then/catch] then: ${resultado}`);
  })
  .catch((err) => {
    console.info(`[then/catch] catch: ${err}`);
  });*/

//console.log(randomNumberAsync());
/*
const listOfPromise = [
  randomNumberAsync(),
  randomNumberAsync(),
  randomNumberAsync(),
];*/

//retornar qndo todas forem resolvidas ou umas delas rejeitada
/*Promise
  .all(listOfPromise)
  .then(result => {
    console.log(`result: ${result}`);
  })
  .catch(err => {
    console.log(`err: ${err}`);
  });*/


//  console.log(listOfPromise);
/*
Promise
  .allSettled(listOfPromise)
  .then(result => {
    console.log(`primeira promise resolvida foi`, result);
    //result
    //  .filter(r => r.status === 'fulfilled')
    // .forEach(r => console.log(`value: ${r.value}`));
    //console.log(`result: ${result}`);
  })
  .catch(err => {
    console.log(`err: ${err}`);
  });
*/









  function randomNumber(callback) {
    const tempoDeEspera = randomNumberBetween();
    console.log(`vamos esperar ${tempoDeEspera} milisegundos!`);
      //setTimeout vai rodar assincrono
      setTimeout(() => {
        const aleatorio = randomNumberBetween();
        console.log('numero aleatorio gerado', aleatorio);
  
        if (aleatorio < 5000){
          callback(new Error('numero mto baixo!'), null);
        }
        else callback(null, aleatorio);
      }, tempoDeEspera);
  }

function trataValorAleatorio(err, data) {
  if (err !== null){
    console.log('deu problema rodando com callback', {err, data});
  }
  console.log('deu tudo certo com callback', {err, data});
}

randomNumber(trataValorAleatorio);