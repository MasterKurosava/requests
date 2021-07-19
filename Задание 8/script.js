const numberLabel = document.querySelectorAll('input')[0],
  limitLabel = document.querySelectorAll('input')[1],
  btnRequest = document.querySelector('button'),
  errorMessage = document.createElement('p');
//Проверка на то, есть ли в localStorage json
function checkLocalStorage() {
  if (localStorage.getItem('list')) {
    makeMaket(JSON.parse(localStorage.getItem('list')))
  } else {
    return false;
  }
}
checkLocalStorage()
//исключения
function checkNumbers() {
  const num = numberLabel.value,
    limit = limitLabel.value;
  errorMessage.innerHTML = ''
  if ((num < 1 || num > 10) && (limit < 1 || limit > 10)) {
    errorMessage.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    btnRequest.insertAdjacentElement('afterend', errorMessage);
  } else if ((num < 1 || num > 10)) {
    errorMessage.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    btnRequest.insertAdjacentElement('afterend', errorMessage)
  } else if ((limit < 1 || limit > 10)) {
    errorMessage.innerHTML = 'Лимит вне диапазона от 1 до 10';
    btnRequest.insertAdjacentElement('afterend', errorMessage)
  } else {
    takeJson()
  }
};
//просим json файл
function takeJson() {
  const url = `https://picsum.photos/v2/list?page=${numberLabel.value}&limit=${limitLabel.value}`;
  fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      makeMaket(data)
    })
    .catch(() => {
      errorMessage.innerHTML = 'Не удалось загрузить изображение'
    });
}
//Размещаем фото из переданного массива
function makeMaket(data) {
  let photoContainer = document.createElement('div');
  document.querySelector('.photo_container').innerHTML = '';
  photoContainer.className = 'photo_container';
  for (i = 0; i < data.length; i++) {
    photoContainer.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${data[i].download_url}" class="card-img-top" alt="photo">
      <div class="card-body">
        <p class="card-text">Автор: ${data[i].author}</p>
      </div>
    </div>`
  }
  document.querySelector('.input_container').insertAdjacentElement('afterend', photoContainer)//выкладываем фото
  localStorage.setItem('list', JSON.stringify(data))//записываем в LS новые данные
}
//обработчик
btnRequest.addEventListener('click', () => {
  checkNumbers();
})