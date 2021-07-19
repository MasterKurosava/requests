//проверка посещал ли пользователь раньше
function userCheck() {
  if (localStorage.getItem('Name')) {
    alert(`${localStorage.getItem('Name')}, вы вернулись! Последний раз вы были у нас ${localStorage.getItem('LastVisit')}`);
    newUserVisit()
  } else {
    newUserName()
  }
}
//вбиваем в localStorage имя
function newUserName() {
  localStorage.setItem('Name', prompt('Вы у нас впервые! Как вас зовут?'));
  newUserVisit()
}
//вбиваем в localStorage новое время
function newUserVisit() {
  const d = new Date;
  const mounths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let lastVisit = `${d.getDate()}-го ${mounths[d.getMonth()]} ${d.getFullYear()} в ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  localStorage.setItem('LastVisit', lastVisit);
}
userCheck()