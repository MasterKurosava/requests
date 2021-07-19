for (i = 0; i < 10; i++) {
  let randomNum = Math.round(Math.random() * 100)
  let myPromise = new Promise((resolve, reject) => {
    if (randomNum % 2 == 0) {
      resolve(randomNum);
    } else {
      reject(randomNum);
    };
  });
  myPromise
  .then((num)=>{
    console.log('Завершено успешно. Сгенерированное число', num);
  })
  .catch((num)=>{
    console.log('Завершено с ошибкой. Сгенерированное число', num);
  })
}