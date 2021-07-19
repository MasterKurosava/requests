let loadBtn = document.getElementsByClassName('container_button')[0],
  dataJSON,
  xhr = new XMLHttpRequest();

//Парсим JSON

xhr.onload = function () {
  dataJSON = JSON.parse(xhr.response);
}
xhr.open('get', 'practic.json', true);
dataJSON = xhr.send()

function showSum() {
  let year = document.getElementsByClassName('container_year')[0].value;
  let sumBlocks = document.getElementsByClassName('container_sum');
  let dataContainer = document.getElementsByClassName('container_data')[0];
  dataContainer.style.display = 'flex';
  //Перебираем значения и вводим в блоки
  for (i = 0; i < dataJSON.length; i++) {
    if (dataJSON[i].year == (year)) {
      for (j = 0; j < sumBlocks.length; j++) {
        sumBlocks[j].textContent = dataJSON[i].sales[`q${j+1}`];
      }
    }
  }
}
loadBtn.addEventListener('click', () => {
  showSum()
})